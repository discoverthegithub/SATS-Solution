const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = 'd:/sats-solutions-website/frontend/public/assets/images';

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    if (res.statusCode === 302 || res.statusCode === 301) {
      download(res.headers.location, dest).then(resolve).catch(reject);
      return;
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => { file.close(); resolve(); });
  }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
});

async function main() {
  const avatars = ["1560250097-0b93528c311a","1573496359142-b8d87734a5a2","1580489944761-15a19d654956","1507003211169-0a1dd7228f2d"];
  for (let i=0; i<4; i++) await download(`https://images.unsplash.com/photo-${avatars[i]}?q=60&w=300&auto=format&fit=crop`, `${dir}/avatar-${i+1}.jpg`);

  const blogs = ["1518770660439-4636190af475","1451187580459-43490279c0fa","1504384308090-c894fdcc538d","1498050108023-c5249f4df085","1488590528505-98d2b5dba201","1522071820081-009f0129c71c"];
  for (let i=0; i<6; i++) await download(`https://images.unsplash.com/photo-${blogs[i]}?q=60&w=600&auto=format&fit=crop`, `${dir}/blog-${i+1}.jpg`);

  const careers = ["1552581234-26160ef3350e","1521737604893-d14cc237f11d","1552664730-d307ca884978"];
  for (let i=0; i<3; i++) await download(`https://images.unsplash.com/photo-${careers[i]}?q=60&w=600&auto=format&fit=crop`, `${dir}/career-${i+1}.jpg`);

  const works = ["1551288049-bebda4e38f71","1553877522-43ce6bc0b127","1573164713988-8665fc963095","1525547719571-a2d4ac8945e2","1516110833967-0b5716ca1387","1550751827-4bd374c3f58b","1504868584819-28eb851c1734","1544197150-b99a580bb7a8"];
  for (let i=0; i<8; i++) await download(`https://images.unsplash.com/photo-${works[i]}?q=60&w=600&auto=format&fit=crop`, `${dir}/work-${i+1}.jpg`);

  await download("https://images.unsplash.com/photo-1497366216548-37526070297c?q=60&w=600&auto=format&fit=crop", `${dir}/about-office.jpg`);

  const replaceWithCounter = (filePath, searchStrs, prefix, max) => {
    let content = fs.readFileSync(filePath, 'utf-8');
    let counter = 1;
    searchStrs.forEach(searchStr => {
      const regex = new RegExp(searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
      content = content.replace(regex, () => {
          let current = counter++;
          if (current > max) current = (current - 1) % max + 1;
          return `/assets/images/${prefix}-${current}.jpg`;
      });
    });
    fs.writeFileSync(filePath, content);
  };

  replaceWithCounter('d:/sats-solutions-website/frontend/src/pages/Blog.jsx', ['/assets/images/placeholder-tech.jpg', '/assets/images/placeholder-bg.jpg'], 'blog', 6);
  replaceWithCounter('d:/sats-solutions-website/frontend/src/pages/Work.jsx', ['/assets/images/placeholder-tech.jpg'], 'work', 8);
  replaceWithCounter('d:/sats-solutions-website/frontend/src/pages/Careers.jsx', ['/assets/images/placeholder-tech.jpg'], 'career', 3);

  let about = fs.readFileSync('d:/sats-solutions-website/frontend/src/pages/About.jsx', 'utf-8');
  about = about.replace('<img src="/assets/images/placeholder-tech.jpg" alt="Office Culture" />', '<img src="/assets/images/about-office.jpg" alt="Office Culture" />');
  
  let avatarC = 1;
  about = about.replace(/img="\/assets\/images\/placeholder-(tech|avatar)\.jpg"/g, () => `img="/assets/images/avatar-${avatarC++}.jpg"`);
  fs.writeFileSync('d:/sats-solutions-website/frontend/src/pages/About.jsx', about);
}

main().catch(console.error);
