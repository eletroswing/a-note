
# NfeConsultaCadastro

## Descrição
O Web Service `NfeConsultaCadastro` é utilizado para consultar o cadastro de um contribuinte na SEFAZ.

## Estrutura da Mensagem de Entrada
A mensagem de entrada segue o layout definido pelo schema `consCad_v2.00.xsd`.

## Estrutura da Mensagem de Retorno
A mensagem de retorno segue o layout definido pelo schema `retConsCad_v2.00.xsd`.

## Exemplo de Código Node.js

```javascript
const axios = require('axios');
const fs = require('fs');
const https = require('https');

// Leitura do certificado e chave privada
const cert = fs.readFileSync('certificado.crt');
const key = fs.readFileSync('chave_privada.pem');

// Configuração do cliente HTTPS
const agent = new https.Agent({
  cert: cert,
  key: key,
  rejectUnauthorized: false
});

// XML de consulta de cadastro
const consultaCadastroXML = `
  <consCad xmlns="http://www.portalfiscal.inf.br/nfe" versao="2.00">
    <infCons>
      <xServ>CONS-CAD</xServ>
      <UF>SP</UF>
      <IE>123456789012</IE>
    </infCons>
  </consCad>
`;

// URL do Web Service
const url = 'https://nfe.sefaz.rs.gov.br/ws/NfeConsultaCadastro/NFeConsultaCadastro2.asmx';

// Função para consultar o cadastro do contribuinte
async function consultarCadastro() {
  try {
    const response = await axios.post(url, consultaCadastroXML, {
      headers: {
        'Content-Type': 'application/xml',
      },
      httpsAgent: agent,
    });
    console.log('Resposta:', response.data);
  } catch (error) {
    console.error('Erro:', error);
  }
}

consultarCadastro();
