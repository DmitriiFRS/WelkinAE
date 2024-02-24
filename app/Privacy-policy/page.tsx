import { Metadata } from "next/types";
import Breadcrumbs from "../Utilities/Breadcrumbs";
import TextBlock from "./TextBlock";
import styles from "./privacy.module.scss";
import { fetchGraphqlData } from "../Utilities/FetchData";

export async function generateMetadata() {
   const data = await fetchGraphqlData(
      `
      query {
         metadata {
           nodes {
             title {
               description
               title
             }
           }
         }
       }
    `
   );
   return {
      title: data.data.metadata.nodes[1].title.title,
      description: data.data.metadata.nodes[1].title.description,
   };
}

type TypeSubtitlesInner = {
   main: string;
   listItem?: Array<string>;
};

export type TypeInnerBlock = {
   title: string;
   subtitles: Array<TypeSubtitlesInner>;
};

type TypeTextBlock = Array<TypeInnerBlock>;

const textBlock: TypeTextBlock = [
   {
      title: "1. General provisions",
      subtitles: [
         {
            main: "1.1. This Policy regarding the processing and protection of personal data (hereinafter - the Policy) is developed in accordance with Article 18.1 of the Federal Law dated 27.07.2006 No. 152-FZ On Personal Data and is an internal document of URBAN-GROUPP LLC (hereinafter - the Company) regulating its activities in the field of processing and protection of personal data, the operator of which is the Company.",
         },
         {
            main: "1.2. The Policy is developed in order to implement the requirements of the legislation of the Russian Federation in the field of processing and protection of personal data and is aimed at ensuring the protection of human and civil rights and freedoms when processing personal data in the Company, including the protection of the rights to privacy, personal and family secrets.",
         },
         {
            main: "1.3. This Policy applies to any user information received by the Company, both before and after the Policy is approved.",
         },
         {
            main: "1.4. This Policy applies to all information that the Company may obtain about the user during his/her use of the welkin-team.ae website (hereinafter - the Site).",
         },
         {
            main: "1.5. Visiting and using the Site constitutes the user's unconditional consent:",
            listItem: [
               "to the processing of his/her personal data specified in Article 2 of this Policy;",
               "with the terms of processing his/her personal data contained in this Policy.",
            ],
         },
         {
            main: "1.6. In case of disagreement with the terms of personal data processing in the Company, the user must stop using the Site.",
         },
         {
            main: "1.7. This Policy applies only to the welkingroup.ru website The Company does not control and is not responsible for the collection and processing of personal data by third parties, whose websites the user can access via links available on the welkin-team.ae website.",
         },
         {
            main: "1.8. The Company does not verify the authenticity of personal data provided by the user.",
         },
      ],
   },
   {
      title: "2. Composition of personal data received and processed",
      subtitles: [
         {
            main: "2.1. User data received and processed within the framework of this Policy shall be received by the Company in the following ways:",
         },
         {
            main: "2.1.1. Provided by the user himself on the Site by:",
            listItem: [
               "filling in the registration form and include the following information: surname, first name, e-mail address (email);",
               "filling in the user's data in myAlpari and include the following information: surname, first name, patronymic, telephone number, electronic mail (email) address, postal address;",
               "filling in the order form and include the following information: surname, first name, patronymic, phone number, e-mail address, postal address;",
               "filling out the newsletter subscription form and include information about your e-mail address;",
               "filling out the feedback form and include the following information: name, e-mail address (email), phone number;",
               "filling out the callback form and include phone number information;",
               "filling in the form of request for calculation of the Company's services cost and include the following information: name, phone number, e-mail address (email);",
               "communication with the Company by sending written correspondence to the Company's mailing addresses, telephone numbers, e-mail addresses specified on the Website and by any other means and may include the following information: Full name, postal address, place of residence, contact phone number, electronic mail (e-mail) address and other information at the discretion of the user.",
            ],
         },
         {
            main: "2.1.2. Automatically transmitted to the Company in the process of visiting and using the Site using the software installed on the user's device, including: IP address, cookie information, information about the user's browser (or other program with which the Site is accessed), access time, address of the requested page.",
         },
      ],
   },
   {
      title: "3. Purposes of personal data collection and processing",
      subtitles: [
         {
            main: "3.1. The Company collects and processes user's personal data for the following purposes:",
         },
         {
            main: "3.1.1. Conclusion of contracts for sale of goods (provision of services) to the user on behalf of the Company and (or) the Company's partners.",
         },
         {
            main: "3.1.2. Communication with the user when necessary, including sending notices, requests and information related to the use of the Site, execution of orders for the purchase of goods and provision of services by the Company, as well as processing requests and applications from the user;",
         },
         {
            main: "3.1.3. Provision of effective customer and technical support to the user in case of problems related to the use of the Website, provision of services by the Company and (or) the Company's partners;",
         },
         {
            main: "3.1.4. Improving the quality of the Website and its usability;",
         },
         {
            main: "3.1.5. Provision of personal services, special offers, price information, newsletters and other information on behalf of the Company and (or) on behalf of the Company's partners to the user with his/her consent;",
         },
         {
            main: "3.1.6. Carrying out advertising activities with the consent of the user;",
         },
         {
            main: "3.1.7. Conducting statistical and other studies based on anonymized data.",
         },
      ],
   },
   {
      title: "4. Providing access to personal data",
      subtitles: [
         {
            main: "4.1. The Company shall ensure the safety of users' personal data.",
         },
         {
            main: "4.2. Processed personal data shall be destroyed or anonymized by the Company upon achievement of the processing purposes or in case of loss of necessity to achieve these purposes, as well as in case of withdrawal of the User's consent to the processing of personal data.",
         },
         {
            main: "4.3. The User has the right to withdraw consent to the Company's processing of personal data at any time by sending a written notice to the address: Moscow, Stroitelny pr-d, 7a, Bldg. 30, marked withdrawal of consent to the processing of personal data. Withdrawal of consent to the processing of personal data by the user shall result in the destruction of records containing personal data in the Company's personal data processing systems.",
         },
         {
            main: "4.4. User's personal data shall be kept confidential, except for the cases specified in clause 4.5. of this Policy.",
         },
         {
            main: "4.5. The Company has the right to transfer the user's personal data to third parties in the following cases:",
         },
         {
            main: "4.5.1. The User has expressly consented to the transfer of his/her personal data;",
         },
         {
            main: "4.5.2. The transfer of personal data is necessary for the provision of a certain service to the user by the Company or the Company's partners (transportation companies, payment services, etc.). The confidentiality of personal information is ensured, and the user is notified of such transfer;",
         },
         {
            main: "4.5.3. The transfer is provided for by Russian or other applicable law under an established procedure (by court order, law enforcement request, etc.);",
         },
         {
            main: "4.5.4. Such a transfer occurs as part of a sale or other transfer of a business (in whole or in part), and the transferee assumes all obligations to comply with the terms of this Policy with respect to the personal information it receives;",
         },
         {
            main: "4.5.5. In order to provide an opportunity to protect the rights and legitimate interests of the Company.",
         },
         {
            main: "4.6. In case of loss or disclosure of personal data, the Company shall inform the user of the loss or disclosure of personal data.",
         },
      ],
   },
   {
      title: "5. Protection of users' personal data",
      subtitles: [
         {
            main: "5.1. The Company guarantees that the level of protection of users' personal data complies with the requirements set forth in Resolution of the Government of the Russian Federation No. 1119 dated November 1, 2012 On Approval of Requirements for Protection of Personal Data when Processed in Personal Data Information Systems.",
         },
         {
            main: "5.2. The Company shall take the necessary organizational and technical measures to protect the user's personal data from illegal or accidental access, destruction, modification, blocking, copying, distribution, as well as from other illegal actions of third parties in accordance with the requirements of the Order of the Federal Service for Technical and Export Control of Russia No. 21 dated 18.02.2013 On Approval of the Composition and Content of Organizational and Technical Measures to Ensure the Security of Personal Data when Processing in Personal Data Information Systems.",
         },
         {
            main: "5.3. The welkin-team.ae website has an SSL security certificate, by means of which information is transmitted between the user and the Operator in encrypted form, in order to prevent its interception and distortion during transmission.",
         },
      ],
   },
   {
      title: "6. Responsibility",
      subtitles: [
         {
            main: "6.1. In case of non-fulfillment of its obligations, the Company shall be liable for losses incurred by the user due to unauthorized use of personal data in accordance with the legislation of the Russian Federation, except as provided for in 6.2. of this Policy.",
         },
         {
            main: "6.2. In case of loss or disclosure of the user's personal data, the Company shall not be liable if this information became public before its loss or disclosure, or was disclosed by the user or with the user's consent.",
         },
      ],
   },
   {
      title: "7. Final provisions",
      subtitles: [
         {
            main: "7.1. The Company shall have the right to make amendments and additions to this Policy. The new version of the Policy shall be effective from the moment of its posting on the welkin-team.ae website, unless otherwise provided for in the new version of the Policy.",
         },
         {
            main: "7.2. The current legislation of the Russian Federation shall apply to the relations in the field of processing and protection of personal data not regulated in this Policy.",
         },
      ],
   },
];

function Privacy() {
   return (
      <section className={styles.privacy}>
         <div className="container">
            <Breadcrumbs />
            <h2 className={styles.privacy__title}>Privacy policy</h2>
            {textBlock.map((el, index) => {
               return <TextBlock key={index} content={el} />;
            })}
         </div>
      </section>
   );
}
export default Privacy;
