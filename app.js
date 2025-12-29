// الإعدادات الافتراضية
const MY_PASS = "1234"; 

function checkAuth() {
    if(document.getElementById('admin-pass').value === MY_PASS) {
        document.getElementById('admin-auth').style.display = 'none';
        document.getElementById('admin-content').style.display = 'block';
    }
}

function saveSettings() {
    const tag = document.getElementById('affiliate-tag').value;
    const prio = document.getElementById('priority-select').value;
    localStorage.setItem('loqta_tag', tag);
    localStorage.setItem('loqta_priority', prio);
    alert("تم تحديث الروبوت بنجاح!");
}

// محرك تحويل الروابط
function getAffiliateLink(url) {
    const tag = localStorage.getItem('loqta_tag') || "loqta-21";
    return `${url}?tag=${tag}`;
}