import axios from "axios";
import xmlbuilder from "xmlbuilder";
import { SignedXml } from "xml-crypto";
import fs from "fs";

interface NFeFactoryInstantiatePayload {
  /** Certificado digital.**/
  cert: string;
  /** Chave privada para assinatura.**/
  private_key: string;
  /** Endpoint de produção ou homologação do sefaz da região UF.**/
  sefaz_endpoint: string;
}

interface NFeInstance {
    /** Função para criar uma NF-e.**/
    create: Function;
    /** Função para emitir NF-e em contingência.**/
    contingency: Function;
    /** Função para autorizar NF-e em lotes.**/
    authorize: Function;
    /** Função para receber a resposta da autorização em lotes da NF-e.**/
    authorizeResponse: Function;
    /** Função para consultar cadastro da NF-e.**/
    registrationQuery: Function;
    /** Função para consultar protocolo da NF-e.**/
    protocolQuery: Function;
    /** Função é utilizado para obter documentos fiscais eletrônicos que foram destinados ao contribuinte.**/
    distributionDFe: Function;
    /** Função para consultar status do serviço da Sefaz.**/
    status: Function;
    /** Função para obter o PDF da NF-e.**/
    getNFePDF: Function;
}

function NFe(options: NFeFactoryInstantiatePayload): NFeInstance {
  const _generate_dinamic_xml = (rootElement: string, data: any): string => {
    const xml = xmlbuilder.create(rootElement, { encoding: "UTF-8" });

    function buildXML(element: any, data: any) {
      Object.keys(data).forEach((key) => {
        if (key.startsWith("@")) {
          element.att(key.substring(1), data[key]);
        } else if (typeof data[key] === "object" && !Array.isArray(data[key])) {
          buildXML(element.ele(key), data[key]);
        } else {
          element.ele(key, data[key]);
        }
      });
    }

    buildXML(xml, data);
    return xml.end({ pretty: true });
  };

  const _sign_xml = (xml: string) => {
    const signedXml = new SignedXml({
      privateKey: fs.readFileSync(options.private_key),
      publicCert: fs.readFileSync(options.cert),
    });

    signedXml.addReference({
      xpath: "//*[local-name(.)='infNFe']",
      digestAlgorithm: "http://www.w3.org/2001/04/xmlenc#sha256",
      transforms: ["http://www.w3.org/2000/09/xmldsig#enveloped-signature"],
    });

    signedXml.computeSignature(xml);
    return signedXml.getSignedXml();
  };

  const _send_nfe = (signed_xml: string, contingencia: boolean = false) => {
    const url = contingencia ? `${options.sefaz_endpoint}/contingencia` : options.sefaz_endpoint;
    return axios.post(url, signed_xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  };

  const _send_event = (signed_xml: string) => {
    return axios.post(options.sefaz_endpoint, signed_xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  };

  const create = () => {
    return;
  };

  const contingency = () => {
    return;
  };

  const authorize = () => {
    return;
  };

  const authorizeResponse = () => {
    return;
  };

  const registrationQuery = () => {
    return;
  };

  const protocolQuery = () => {
    return;
  };

  const distributionDFe = () => {
    return;
  };

  const status = () => {
    return;
  };

  const getNFePDF = () => {
    return;
  };

  return {
    create,
    contingency,
    authorize,
    authorizeResponse,
    registrationQuery,
    protocolQuery,
    distributionDFe,
    status,
    getNFePDF,
  };
}

export default NFe;
