global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports = {
    connectionString: 'mongodb://admin:admin@ds032340.mlab.com:32340/ndstr', //Coloque seu próprio usuário e senha para testar
    sendgridKey: 'SUA CHAVE',
    containerConnectionString: 'SUA CONNECTION STRING'
}