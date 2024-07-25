import React from 'react';
import {Box, Typography} from "@mui/material";
import appDetails from "../../../../../motivated-ui-react/src/shared/app-details";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: 'View Terms of Use policy of Motivation Advisor'
};

export default function Page(props: any) {

        const appName = appDetails.name();
        const appNameUppercase = appName.toUpperCase();
        const mainHeading = "h4";
        const subheading = "h5";
        return (
            <Box sx={{
                marginTop: '100px',
                width: '80%'
            }}>

                <Typography variant={mainHeading}>Introduction</Typography>

                <p>
                    Thanks for using {appName}’s products, services, websites, and apps which are branded as “{appName}” (“{appName} Services”).
                </p>
                <p>
                    These Terms of Use (“TOU”) contain the terms under which {appName} and its affiliates provide their Services to you and describe how the Services may be accessed and used. These TOU do not apply to {appName} Services which are available solely through our sales channel.
                </p>
                <p>
                    {appName} provides a variety of different services. Additional service-specific terms and policies (including rules and guidelines) apply to some Services (“Additional Terms”). Those Additional Terms become a part of your agreement with us if you use those Services. For example, if you use our survey services, the Survey Platform Terms of Service apply.
                </p>
                <p>
                    You can view a full list of Additional Terms in our Legal Center. We refer to the combination of these TOU and any applicable Additional Terms collectively as these “Terms.”
                </p>
                <p>
                    You indicate your agreement to these Terms by clicking or tapping on a button indicating your acceptance of these Terms, by executing a document that references them, or by using the Services.
                </p>
                <p>
                    If you will be using the Services on behalf of an organization, you agree to these Terms on behalf of that organization and you represent that you have the authority to do so. In such case, “you” and “your” will refer to that organization.
                </p>

                <Typography variant={mainHeading}>1. Fees and Payments</Typography>

                <Typography variant={subheading}>1.1. Fees for Services.</Typography>
                <p>
                    You agree to pay to {appName} any fees for each Service you purchase or use (including any overage fees), in accordance with the pricing and payment terms presented to you for that Service. Where applicable, you will be billed using the billing method you select through your account management page. If you have elected to pay the fees by credit card, you represent and warrant that the credit card information you provide is correct and you will promptly notify {appName} of any changes to such information. Fees paid by you are non-refundable, except as provided in these Terms or when required by law.
                </p>

                <Typography variant={subheading}>1.2. Subscriptions.</Typography>
                <p>
                    Some of our Services are billed on a subscription basis (we call these “Subscriptions”). This means that you will be billed in advance on a recurring, periodic basis (each period is called a “billing cycle”). Billing cycles are typically monthly or annual, depending on what subscription plan you select when purchasing a Subscription. Your Subscription will automatically renew at the end of each billing cycle unless you cancel auto-renewal through your online account management page, or by contacting our customer support team. While we will be sad to see you go, you may cancel auto-renewal on your Subscription at any time, in which case your Subscription will continue until the end of that billing cycle before terminating. You may cancel auto-renewal on your Subscription immediately after the Subscription starts if you do not want it to renew.
                </p>
                <Typography variant={subheading}>1.3. Taxes.</Typography>
                <p>
                    Our prices listed do not include any taxes, levies, duties or similar governmental assessments of any nature such as value-added, sales, use or withholding taxes, assessable by any jurisdiction (collectively, “Taxes”) unless otherwise indicated. You are responsible for paying Taxes associated with your purchase and keeping your billing information up to date.
                </p>
                <p>
                    (a) United State Sales Tax. If we have a legal obligation to pay or collect sales tax for which you are responsible, we will calculate the sales tax based upon the billing information we have about you and charge you that amount (which may be the highest prevailing rate then in effect, if your billing information is incomplete or inaccurate), unless you provide us with a valid tax exemption certificate acceptable to the appropriate taxing authority.
                </p>
                <p>
                    If you provide us with a tax exemption certificate, you represent and warrant that it accurately reflects your tax status and that you will keep such document current and accurate.
                    If we subsequently determine in our sole discretion that your tax exemption document is valid, we will refund the sales tax collected.
                </p>
                <p>
                     (b) Non-United States Sales Tax. We will charge you VAT unless you provide us a VAT number issued by a taxing authority in the European Union when you are purchasing the Services from {appName} Europe UC for business reasons and are located in a different European Union member state from {appName} Europe UC.
                </p>
                <p>
                     If you are required by law to withhold any Taxes from your payments to {appName}, you must provide {appName} with an official tax receipt or other appropriate documentation to support such payments.
                </p>

                <Typography variant={subheading}>1.4. Price Changes.</Typography>
                <p>
                    {appName} may change the fees charged for the Services at any time, provided that, for Services billed on a subscription basis, the change will become effective only at the end of the then-current billing cycle of your Subscription. {appName} will provide you with advance notice of any change in fees.
                </p>

                <Typography variant={subheading}> 1.5. Overage Fees.</Typography>
                <p>
                Unless otherwise stated, any overage fees incurred by you will be billed in arrears. Overage fees which remain unpaid for 30 days after being billed are considered overdue. Failure to pay overage fees when due may result in the applicable Service being limited, suspended, or terminated (subject to applicable legal requirements), which may result in a loss of your data associated with that Service.
                </p>
                
                <Typography variant={mainHeading}>2. Privacy</Typography>

                <Typography variant={subheading}>2.1. Privacy.</Typography>
                <p>
                    In the course of using the Services, you may submit content to {appName} (including your personal data and the personal data of others) or third parties may submit content to you through the Services (all of the above will be referred to as your “Content”). We know that by giving us your Content, you are trusting us to treat it appropriately. {appName}’s Privacy Policy, together with any Service-specific privacy notices or statements (collectively, “{appName} privacy policies”), detail how we treat your Content and we agree to adhere to those {appName} privacy policies. You in turn agree that {appName} may use and share your Content in accordance with the {appName} privacy policies and applicable data protection laws. If you are a customer who is operating as “data controller” as defined in the European General Data Protection Regulation 2016/679 (“GDPR”) we have added some additional terms below in Section EU2 to address your obligations under this law. You also agree that you are responsible for notifying these third parties who submit content to you through our Services about the {appName} privacy policies.
                </p>

                <Typography variant={subheading}>2.2. Confidentiality.</Typography>
                <p>
                    {appName} will treat your Content as confidential information and only use and disclose it in accordance with these Terms (including the {appName} privacy policies). However, your Content is not regarded as confidential information if such Content: (a) is or becomes public (other than through breach of these Terms by {appName}); (b) was lawfully known to {appName} before receiving it from you; (c) is received by {appName} from a third party without knowledge of breach of any obligation owed to you; (d) is shared in the context of your account being migrated to an organization’s Enterprise account, if your account is registered using a work email address within that organization; or (e) was independently developed by {appName} without reference to your Content. {appName} may disclose your Content when required by law or legal process, but only after {appName}, if permitted by law, uses commercially reasonable efforts to notify you to give you the opportunity to challenge the requirement to disclose.
                </p>
                <Typography variant={subheading}>2.3. Security.</Typography>
                <p>
                    {appName} will store and process your Content in a manner consistent with industry security standards. {appName} has implemented appropriate technical, organizational, and administrative systems, policies, and procedures designed to help ensure the security, integrity, and confidentiality of your Content and to mitigate the risk of unauthorized access to or use of your Content.
                </p>
                <p>
                    If {appName} becomes aware of any unauthorized or unlawful access to, or acquisition, alteration, use, disclosure, or destruction of, personal data related to your account (“Security Incident”), {appName} will take reasonable steps to notify you without undue delay, but in any event within 72 hours of becoming aware of the Security Incident. {appName} will also reasonably cooperate with you with respect to any investigations relating to a Security Incident with preparing any required notices, and provide any other information reasonably requested by you in relation to any Security Incident, where such information is not already available to you in your account or online through updates provided by {appName}.
                </p>
                <Typography variant={mainHeading}>3. Your Content</Typography>


                <Typography variant={subheading}>3.1. You Retain Ownership of Your Content.</Typography>
                <p>
                You retain ownership of all of your intellectual property rights in your Content. {appName} does not claim ownership over any of your Content. These Terms do not grant us any licenses or rights to your Content except for the limited rights needed for us to provide the Services, and as otherwise described in these Terms.
                </p>
                <Typography variant={subheading}>3.2. Limited License to Your Content.</Typography>
                <p>
                You grant {appName} a worldwide, royalty free license to use, reproduce, distribute, modify, adapt, create derivative works, make publicly available, and otherwise exploit your Content, but only for the limited purposes of providing the Services to you and as otherwise permitted by the {appName} privacy policies. This license for such limited purposes continues even after you stop using our Services, with respect to aggregate and de-identified data derived from your Content and any residual backup copies of your Content made in the ordinary course of {appName}’s business. This license also extends to any trusted third parties we work with to the extent necessary to provide the Services to you. If you provide {appName} with feedback about the Services, we may use your feedback without any obligation to you.
                </p>
                <Typography variant={subheading}>3.3. Customer Lists. </Typography>
                <p>
                    {appName} may identify you (by name and logo) as a {appName} Services. Any goodwill arising from the use of your name and logo will inure to your benefit.
                </p>
                <Typography variant={subheading}>3.4. Copyright Claims (DCMA Notices).</Typography>
                <p>
                    {appName} Inc. responds to notices of alleged copyright infringement in accordance with the U.S. Digital Millennium Copyright Act (DMCA). If you believe that your work has been exploited in a way that constitutes copyright infringement, you may notify {appName}’s agent for claims of copyright infringement.
                </p>
                <Typography variant={subheading}>3.5. Other IP Claims.</Typography>
                <p>
                    {appName} respects the intellectual property rights of others, and we expect our users to do the same. If you believe a {appName} user is infringing upon your intellectual property rights, you may report it through our online form. Claims of copyright infringement should follow the DMCA process outlined in these Terms, or any equivalent process available under local law.
                </p>
                <Typography variant={mainHeading}>4. {appName} IP </Typography>

                <Typography variant={subheading}>4.1. {appName} IP. </Typography>
                <p>
                    Neither these Terms nor your use of the Services grants you ownership in the Services or the content you access through the Services (other than your Content). Except as permitted by {appName}’s Brand and Trademark Use Policy, these Terms do not grant you any right to use {appName}’s trademarks or other brand elements.
                </p>
                <Typography variant={mainHeading}>5. User Content </Typography>

                <Typography variant={subheading}>5.1. User Content. </Typography>

                <p>
                    The Services display content provided by others that is not owned by {appName}. Such content is the sole responsibility of the entity that makes it available. Correspondingly, you are responsible for your own Content and you must ensure that you have all the rights and permissions needed to use that Content in connection with the Services. {appName} is not responsible for any actions you take with respect to your Content, including sharing it publicly. Please do not use content from the Services unless you have first obtained the permission of its owner, or are otherwise authorized by law to do so.
                </p>
                <Typography variant={subheading}>5.2. Content Review. </Typography>

                You acknowledge that, in order to ensure compliance with legal obligations, {appName} may be required to review certain content submitted to the Services to determine whether it is illegal or whether it violates these Terms (such as when unlawful content is reported to us). We may also modify, prevent access to, delete, or refuse to display content that we believe violates the law or these Terms. However, {appName} otherwise has no obligation to monitor or review any content submitted to the Services.
                <p>
                </p>
                <Typography variant={subheading}>5.3. Third Party Resources. </Typography>

                <p>
                    {appName} may publish links in its Services to internet websites maintained by third parties. {appName} does not represent that it has reviewed such third party websites and is not responsible for them or any content appearing on them. Trademarks displayed in conjunction with the Services are the property of their respective owners.
                </p>
                <Typography variant={mainHeading}>6. Account Management  </Typography>

                <Typography variant={subheading}>6.1. Keep Your Password Secure. </Typography>

                <p>
                    If you have been issued an account by {appName} in connection with your use of the Services, you are responsible for safeguarding your password and any other credentials used to access that account. You, and not {appName}, are responsible for any activity occurring in your account (other than activity that {appName} is directly responsible for which is not performed in accordance with your instructions), whether or not you authorized that activity. If you become aware of any unauthorized access to your account, you should notify {appName} immediately. Accounts may not be shared and may only be used by one individual per account.
                </p>
                <Typography variant={subheading}>6.2. Keep Your Details Accurate.</Typography>

                <p>
                    {appName} occasionally sends notices to the email address registered with your account. You must keep your email address and, where applicable, your contact details and payment details associated with your account current and accurate.
                </p>
                <Typography variant={subheading}>6.3. Remember to Backup.</Typography>

                <p>
                    You are responsible for maintaining, protecting, and making backups of your Content. To the extent permitted by applicable law, {appName} will not be liable for any failure to store, or for loss or corruption of, your Content.
                </p>
                <Typography variant={subheading}>6.4. Account Inactivity. </Typography>

                <p>
                    {appName} may terminate your account and delete any Content contained in it if there is no account activity (such as a log in event or payment) for over 12 months. However, we will attempt to warn you by email before terminating your account to provide you with an opportunity to log in to your account so that it remains active.
                </p>
                <Typography variant={subheading}> 6.5. Customer Success. </Typography>

                <p>
                    {appName} may assign you a customer success manager (“CSM”). The CSM may review your use of the Services and your Content to help you to more effectively use the Services, including by providing reporting and usage insight.
                </p>
                <Typography variant={mainHeading}>7. User Requirements </Typography>

                <Typography variant={subheading}>7.1. Legal Status. </Typography>

                <p>
                    If you are an individual, you may only use the Services if you have the power to form a contract with {appName}. If you do not have the power to form a contract, you may not use the Services. If you are not an individual, you warrant that you are validly formed and existing under the laws of your jurisdiction of formation, that you have full power and authority to enter into these Terms, and that you have duly authorized your agent to bind you to these Terms.
                </p>
                <Typography variant={subheading}>7.2. Minors. </Typography>

                <p>
                    “Minors” are individuals under the age of 13 (or a higher age as provided in certain countries and territories). None of the Services are intended for use by Minors. If you are a Minor in your place of residence, you may not use the Services. By using the Services, you represent and warrant that you are not a Minor.
                </p>
                <Typography variant={subheading}>7.3. Embargoes.</Typography>

                <p>
                    You may only use the Services if you are not barred under any applicable laws from doing so. If you are located in a country embargoed by United States or other applicable law from receiving the Services, or are on the U.S. Department of Commerce’s Denied Persons List or Entity List, or the U.S. Treasury Department’s list of Specially Designated Nationals, you are not permitted to purchase any paid Services from {appName}. You will ensure that: (a) your end users do not use the Services in violation of any export restriction or embargo by the United States; and (b) you do not provide access to the Services to persons or entities on any of the above lists.
                </p>
                <Typography variant={mainHeading}>8. Acceptable Uses </Typography>

                <Typography variant={subheading}>8.1. Legal Compliance. </Typography>

                <p>
                    You represent and warrant that you will comply with all laws and regulations applicable to your use of the Services.

                </p>
                <Typography variant={subheading}>8.2. Your Responsibilities.</Typography>

                <p>
                    You are responsible for your conduct, Content, and communications with others while using the Services. You must comply with the following requirements when using the Services:

                    (a) You may not purchase, use, or access the Services for the purpose of building a competitive product or service or for any other competitive purposes.

                    (b) You may not misuse our Services by interfering with their normal operation, or attempting to access them using a method other than through the interfaces and instructions that we provide.

                    (c) You may not circumvent or attempt to circumvent any limitations that {appName} imposes on your account (such as by opening up a new account to conduct a survey that we have closed for a Terms violation).

                    (d) Unless authorized by {appName} in writing, you may not probe, scan, or test the vulnerability of any {appName} system or network.

                    (e) Unless authorized by {appName} in writing, you may not use any manual or automated system or software to extract or scrape data from the websites or other interfaces through which we make our Services available.

                    (f) Unless permitted by applicable law, you may not deny others access to, or reverse engineer, the Services, or attempt to do so.

                    (g) You may not transmit any viruses, malware, or other types of malicious software, or links to such software, through the Services.

                    (h) You may not engage in abusive or excessive usage of the Services, which is usage significantly in excess of average usage patterns that adversely affects the speed, responsiveness, stability, availability, or functionality of the Services for other users. {appName} will endeavor to notify you of any abusive or excessive usage to provide you with an opportunity to reduce such usage to a level acceptable to {appName}.

                    (i) You may not use the Services to infringe the intellectual property rights of others, or to commit an unlawful activity.

                    (j) Unless authorized by {appName} in writing, you may not resell or lease the Services.

                    (k) If your use of the Services requires you to comply with industry-specific regulations applicable to such use, you will be solely responsible for such compliance, unless {appName} has agreed with you otherwise. You may not use the Services in a way that would subject {appName} to those industry-specific regulations without obtaining {appName}’s prior written agreement. For example, you may not use the Services to collect, protect, or otherwise handle “protected health information” (as defined in 45 C.F.R. §160.103 under United States federal regulations) without entering into a separate business associate agreement with {appName} that permits you to do so.

                    (l) You may not register accounts by “bots” or other automated methods.

                    (m) Your Content and use of the Services may not violate our Content Policy.
                </p>
                <Typography variant={mainHeading}>9. Suspension and Termination of Services</Typography>

                <Typography variant={subheading}>9.1. By You. </Typography>

                <p>
                   You can terminate your Subscription at any time through your account management page. Such termination will result in the deactivation or disablement of your account and access to it, and the deletion of content you collected through use of the Services. Terminations are confirmed immediately and you will not be charged again for that Subscription unless you purchase a new one. If you terminate a Subscription in the middle of a billing cycle, you will not receive a refund unless you are terminating these Terms for any of the following reasons: (a) we have materially breached these Terms and failed to cure that breach within 30 days after you have so notified us in writing; (b) a refund is required by law; or (c) we, in our sole discretion, determine a refund is appropriate. For clarity, we will not grant a refund where you have used our Services, collected responses, and/or downloaded your responses unless the termination is due to our material, uncured breach or a refund is required by law.
                </p>
                <Typography variant={subheading}>9.2. By {appName}. </Typography>
 
                <p>
                    {appName} may terminate your Subscription at the end of a billing cycle by providing at least 30 days’ prior written notice to you. {appName} may terminate your Subscription for any reason by providing at least 90 days’ written notice to you and will provide a pro rata refund for any period of time you did not use in that billing cycle. {appName} may suspend performance or terminate your Subscription for any of the following reasons: (a) you have materially breached these Terms and failed to cure that breach within 30 days after {appName} has so notified you in writing; (b) you cease your business operations or become subject to insolvency proceedings and the proceedings are not dismissed within 90 days; or (c) you fail to pay fees for 30 days past the due date. Additionally, {appName} may limit, suspend, or terminate the Services to you: (i) if you fail to comply with these Terms, (ii) if you use the Services in a way that causes legal liability to us or disrupts others’ use of the Services; or (iii) if we are investigating suspected misconduct by you. Also, if we limit, suspend, or terminate the Services you receive, we will endeavor to give you advance notice and an opportunity to export a copy of your Content from that Service. However, there may be time sensitive situations where {appName} may decide that we need to take immediate action without notice. {appName} will use commercially reasonable efforts to narrow the scope and duration of any limitation or suspension under this Section as is needed to resolve the issue that prompted such action. {appName} has no obligation to retain your Content upon termination of the applicable Service.
                </p>
                <Typography variant={subheading}>9.3. Further Measures. </Typography>

                <p>
                    If {appName} stops providing the Services to you because you repeatedly or egregiously breach these Terms, {appName} may take measures to prevent the further use of the Services by you, including blocking your IP address.
                </p>
                <Typography variant={mainHeading}>11. Changes and Updates </Typography>

                <Typography variant={subheading}>11.1. Changes to Terms. </Typography>

                <p>
                    {appName} may change these Terms at any time for a variety of reasons, such as to reflect changes in applicable law or updates to Services, and to account for new Services or functionality. The most current version will always be posted on the {appName} website. If an amendment is material, as determined in {appName}’s sole discretion, {appName} will notify you by email. Notice of amendments may also be posted to {appName}’s blog or upon your login to your account. Changes will be effective no sooner than the day they are publicly posted. In order for certain changes to become effective, applicable law may require {appName} to obtain your consent to such changes, or to provide you with sufficient advance notice of them. If you do not want to agree to any changes made to the terms for a Service, you should stop using that Service, because by continuing to use the Services you indicate your agreement to be bound by the updated terms.
                </p>
                <Typography variant={subheading}>11.2. Changes to Services. </Typography>

                <p>
                    {appName} constantly changes and improves the Services. {appName} may add, alter, or remove functionality from a Service at any time without prior notice. {appName} may also limit, suspend, or discontinue a Service at its discretion. If {appName} discontinues a Service, we will give you reasonable advance notice to provide you with an opportunity to export a copy of your Content from that Service. {appName} may remove content from the Services at any time in our sole discretion, although we will endeavor to notify you before we do that if it materially impacts you and if practicable under the circumstances.
                </p>
                <Typography variant={subheading}>11.3. Downgrades. </Typography>

                <p>
                    Downgrading your account plan may cause the loss of content, features, functionality, or capacity of your account.
                </p>
                <Typography variant={mainHeading}>12. Disclaimers and Limitations of Liability </Typography>

                <Typography variant={subheading}>12.1. Disclaimers. </Typography>

                <p>
                    While it is in {appName}’s interest to provide you with a great experience when using the Services (and we love to please our customers), there are certain things we do not promise about them. We try to keep our online Services up, but they may be unavailable from time to time for various reasons. EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED “AS IS” AND {appNameUppercase} DOES NOT MAKE WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OR ANY REPRESENTATIONS REGARDING AVAILABILITY, RELIABILITY, OR ACCURACY OF THE SERVICES.
                </p>
                <Typography variant={subheading}>12.2. Exclusion of Certain Liability. </Typography>

                <p>
                    TO THE EXTENT PERMITTED BY APPLICABLE LAW, {appNameUppercase}, ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS, AND LICENSORS WILL NOT BE LIABLE FOR (A) ANY INDIRECT, CONSEQUENTIAL, SPECIAL, INCIDENTAL, PUNITIVE, OR EXEMPLARY DAMAGES WHATSOEVER, OR (B) LOSS OF USE, DATA, BUSINESS, REVENUES, OR PROFITS (IN EACH CASE WHETHER DIRECT OR INDIRECT), ARISING OUT OF OR IN CONNECTION WITH THE SERVICES AND THESE TERMS, AND WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF {appNameUppercase} HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                </p>
                <Typography variant={subheading}>12.3. Limitation of Liability. </Typography>

                <p>
                    TO THE EXTENT PERMITTED BY APPLICABLE LAW, THE AGGREGATE LIABILITY OF EACH OF {appNameUppercase}, ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS, AND LICENSORS ARISING OUT OF OR IN CONNECTION WITH THE SERVICES AND THESE TERMS WILL NOT EXCEED THE LESSER OF: (A) THE AMOUNTS PAID BY YOU TO {appNameUppercase} FOR USE OF THE SERVICES AT ISSUE DURING THE 12 MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY; AND (B) US$200.00.
                </p>
                <Typography variant={subheading}>12.4. Consumers. </Typography>

                <p>
                    We acknowledge that the laws of certain jurisdictions provide legal rights to consumers that may not be overridden by contract or waived by those consumers. If you are such a consumer, nothing in these Terms limits any of those consumer rights.
                </p>
                <Typography variant={subheading}>12.5. Indemnification.</Typography>

                <p>
                    If you are a business, you will indemnify and hold harmless {appName} and its affiliates, officers, agents, and employees from all liabilities, damages, and costs (including settlement costs and reasonable attorneys’ fees) (“Indemnification Amounts”) arising out of a third party claim regarding or in connection with your or your end users’ use of the Services or breach of these Terms, to the extent that such liabilities, damages and costs were caused by you or your end users.
                </p>
                <p>
                    If you are any kind of user, you will indemnify and hold Indemnified Entities harmless from any Indemnification Amounts arising out of a breach of your obligation in Section 1.3 to ensure your tax exemption certificate, if any, accurately reflects your current tax status.
                </p>
                <Typography variant={subheading}>13. Contracting Entity </Typography>

                <Typography variant={subheading}>13.1. Who you are contracting with. </Typography>

                <p>
                    Unless otherwise specified in relation to a particular Service, the Services are provided by, and you are contracting with, {appName}.
                </p>
                <Typography variant={subheading}>14. Other Terms</Typography>

                <Typography variant={subheading}>14.1. Assignment. </Typography>

                <p>
                   You may not assign these Terms without {appName}’s prior written consent, which may be withheld in {appName}’s sole discretion. {appName} may assign these Terms at any time without notice to you.
                </p>
                <Typography variant={subheading}>14.2. Entire Agreement. </Typography>

                <p>
                    These Terms (including the Additional Terms) constitute the entire agreement between you and {appName}, and they supersede any other prior or contemporaneous agreements, terms and conditions, written or oral concerning its subject matter. Any terms and conditions appearing on a purchase order or similar document issued by you do not apply to the Services, do not override or form a part of these Terms, and are void.
                </p>
                <Typography variant={subheading}>14.3. Independent Contractors. </Typography>

                <p>
                    The relationship between you and {appName} is that of independent contractors, and not legal partners, employees, or agents of each other.
                </p>
                <Typography variant={subheading}>14.4. Interpretation. </Typography>

                <p>
                    The use of the terms “includes”, “including”, “such as”, and similar terms, will be deemed not to limit what else might be included.
                </p>
                <Typography variant={subheading}>14.5. No Waiver. </Typography>

                <p>
                    A party’s failure or delay to enforce a provision under these Terms is not a waiver of its right to do so later.
                </p>
                <Typography variant={subheading}>14.6. Precedence. </Typography>

                <p>
                    To the extent any conflict exists, the Additional Terms prevail over this TOU with respect to the Services to which the Additional Terms apply.
                </p>
                <Typography variant={subheading}>14.7. Severability. </Typography>

                <p>
                    If any provision of these Terms is determined to be unenforceable by a court of competent jurisdiction, that provision will be severed and the remainder of terms will remain in full effect.
                </p>
                <Typography variant={subheading}>14.8. Third Party Beneficiaries. </Typography>

                <p>
                    There are no third party beneficiaries to these Terms.
                </p>
                <Typography variant={subheading}>14.9. Survival.</Typography>

                <p>
                    The following sections will survive the termination of these Terms: 1, 2, 3.2, 9, 11, 12, 13, 14, 15, and 16.
                </p>
                <Typography variant={mainHeading}>15. Terms for Certain Customers and Countries </Typography>

                <Typography variant={subheading}>15.1. Language.</Typography>

                <p>
                    These Terms are prepared and written in English. To the extent that any translated version conflicts with the English version, the English version controls, except where prohibited by applicable law.
                </p>

            </Box>
        );

}
