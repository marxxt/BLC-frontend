// lib/pdfGenerator.tsx
import {
  ApplicationData,
  ApplicantInfo,
  BusinessInfo,
  ProjectInfo,
  FinancingInfo,
  OwnershipInfo,
} from "../types/application";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  pdf,
} from "@react-pdf/renderer";

// Register a font to avoid "Font family not recognized" errors
// You might need to provide a path to a .ttf file if you want a custom font
Font.register({
  family: "Arial",
  src: '/fonts/Roboto-Light.ttf',
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
    fontFamily: "Arial",
  },
  header: {
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
  },
  logo: {
    width: 150,
    marginBottom: 15,
    alignSelf: "center",
  },
  h1: {
    color: "#2a6099",
    marginBottom: 5,
    fontSize: 24,
  },
  h2: {
    color: "#333",
    marginTop: 0,
    fontSize: 18,
  },
  p: {
    fontSize: 12,
    marginBottom: 4,
  },
  strong: {
    fontWeight: "bold",
  },
  section: {
    marginBottom: 25,
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
  },
  h3: {
    color: "#2a6099",
    marginTop: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
    fontSize: 16,
  },
  field: {
    marginBottom: 6,
    flexDirection: "row",
    alignItems: "flex-start",
    fontSize: 12,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
    width: 160,
    marginRight: 5,
    fontSize: 12,
  },
  value: {
    flexGrow: 1,
    flexShrink: 1,
    fontSize: 12,
  },
  signatureSection: {
    marginTop: 40,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderStyle: "dashed",
    flexDirection: "column",
  },
  signatureLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: 200, // Fixed width instead of percentage
    marginTop: 20,
    paddingBottom: 2,
  },
  signatureText: {
    fontSize: 10,
    marginTop: 5,
  },
  signatureRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 20,
    gap: 80, // Add space between signature and date
  },
  printName: {
    marginTop: 20,
    fontSize: 12,
  },
  hr: {
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginVertical: 10,
    borderStyle: "dashed",
  },
});

const ApplicationPdfDocument = ({
  applicationData,
}: {
  applicationData: ApplicationData;
}) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src="/images/logos/light_logo.png" />
        <Text style={styles.h1}>Blue Ledger Capital</Text>
        <Text style={styles.h2}>Loan Application Summary</Text>
        <Text style={styles.p}>
          <Text style={styles.strong}>Application ID:</Text>{" "}
          {applicationData.applicationId || "N/A"}
        </Text>
        <Text style={styles.p}>
          <Text style={styles.strong}>Date:</Text>{" "}
          {applicationData.applicationDate
            ? new Date(applicationData.applicationDate).toLocaleDateString()
            : "N/A"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.h3}>Applicant Information</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Full Name:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.applicantInfo?.fullName || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.applicantInfo?.email || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.applicantInfo?.phone || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Address:</Text>{" "}
          <Text
            style={styles.value}
          >{`${applicationData.applicantInfo?.address?.street || ""}, ${applicationData.applicantInfo?.address?.city || ""}, ${applicationData.applicantInfo?.address?.state || ""} ${applicationData.applicantInfo?.address?.zip || ""}`}</Text>
        </View>
        {applicationData.applicantInfo?.previousAddress && (
          <View style={styles.field}>
            <Text style={styles.label}>Previous Address:</Text>{" "}
            <Text
              style={styles.value}
            >{`${applicationData.applicantInfo.previousAddress.street || ""}, ${applicationData.applicantInfo.previousAddress.city || ""}, ${applicationData.applicantInfo.previousAddress.state || ""} ${applicationData.applicantInfo.previousAddress.zip || ""}`}</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.h3}>Business Information</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Legal Name:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.legalName || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>DBA Name:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.dbaName || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Business Type:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.businessType || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Tax ID (EIN):</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.taxId || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>DUNS Number:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.dunsNumber || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Established Date:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.established || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Nature of Business:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.natureOfBusiness || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Address:</Text>{" "}
          <Text
            style={styles.value}
          >{`${applicationData.businessInfo?.address?.street || ""}, ${applicationData.businessInfo?.address?.city || ""}, ${applicationData.businessInfo?.address?.state || ""} ${applicationData.businessInfo?.address?.zip || ""}`}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.phone || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Fax:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.fax || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Employees:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.employees?.toLocaleString() || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Annual Sales:</Text>{" "}
          <Text style={styles.value}>
            $
            {applicationData.businessInfo?.annualSales?.toLocaleString() ||
              "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Annual Profit:</Text>{" "}
          <Text style={styles.value}>
            $
            {applicationData.businessInfo?.annualProfit?.toLocaleString() ||
              "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Bank Name:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.bankInfo?.bankName || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Account Number:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.bankInfo?.accountNumber || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Bank Contact:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.bankInfo?.bankContact || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Bank Phone:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.businessInfo?.bankInfo?.bankPhone || "N/A"}
          </Text>
        </View>
      </View>

      {applicationData.projectInfo && (
        <View style={styles.section}>
          <Text style={styles.h3}>Project Information</Text>
          <View style={styles.field}>
            <Text style={styles.label}>Project Name:</Text>{" "}
            <Text style={styles.value}>
              {applicationData.projectInfo.projectName || "N/A"}
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Property Type:</Text>{" "}
            <Text style={styles.value}>
              {applicationData.projectInfo.propertyType || "N/A"}
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Address:</Text>{" "}
            <Text style={styles.value}>
              {applicationData.projectInfo.address || "N/A"}
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Description:</Text>{" "}
            <Text style={styles.value}>
              {applicationData.projectInfo.description || "N/A"}
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Construction Type:</Text>{" "}
            <Text style={styles.value}>
              {applicationData.projectInfo.constructionType || "N/A"}
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Square Footage:</Text>{" "}
            <Text style={styles.value}>
              {applicationData.projectInfo.squareFootage?.toLocaleString() ||
                "N/A"}
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Commercial Percentage:</Text>{" "}
            <Text style={styles.value}>
              {applicationData.projectInfo.commercialPercentage?.toLocaleString() ||
                "N/A"}
              %
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Total Costs:</Text>{" "}
            <Text style={styles.value}>
              $
              {applicationData.projectInfo.totalCosts?.toLocaleString() ||
                "N/A"}
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Intended Use:</Text>{" "}
            <Text style={styles.value}>
              {applicationData.projectInfo.intendedUse || "N/A"}
            </Text>
          </View>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.h3}>Financing Information</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Loan Type:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.financingInfo?.loanType || "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Requested Amount:</Text>{" "}
          <Text style={styles.value}>
            $
            {applicationData.financingInfo?.requestedAmount?.toLocaleString() ||
              "N/A"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Use of Funds:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.financingInfo?.useOfFunds?.join(", ") || "N/A"}
          </Text>
        </View>
        {applicationData.financingInfo?.existingAdvance && (
          <>
            <View style={styles.field}>
              <Text style={styles.label}>Existing Advance:</Text>{" "}
              <Text style={styles.value}>
                {applicationData.financingInfo.existingAdvance.hasExisting
                  ? "Yes"
                  : "No"}
              </Text>
            </View>
            {applicationData.financingInfo.existingAdvance.hasExisting && (
              <>
                <View style={styles.field}>
                  <Text style={styles.label}>Funder:</Text>{" "}
                  <Text style={styles.value}>
                    {applicationData.financingInfo.existingAdvance.funder ||
                      "N/A"}
                  </Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Balance:</Text>{" "}
                  <Text style={styles.value}>
                    $
                    {applicationData.financingInfo.existingAdvance.balance?.toLocaleString() ||
                      "N/A"}
                  </Text>
                </View>
              </>
            )}
          </>
        )}
        <View style={styles.field}>
          <Text style={styles.label}>Withholding Percentage:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.financingInfo?.witholdingPercentage?.toLocaleString() ||
              "N/A"}
            %
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.h3}>Ownership Information</Text>
        {applicationData.ownershipInfo?.owners &&
        applicationData.ownershipInfo.owners.length > 0 ? (
          <>
            <Text style={styles.p}>
              <Text style={styles.strong}>Owners:</Text>
            </Text>
            {applicationData.ownershipInfo.owners.map((owner, index) => (
              <View key={index}>
                <View style={styles.field}>
                  <Text style={styles.label}>Name:</Text>{" "}
                  <Text style={styles.value}>{owner.name || "N/A"}</Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>SSN:</Text>{" "}
                  <Text style={styles.value}>{owner.ssn || "N/A"}</Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Address:</Text>{" "}
                  <Text style={styles.value}>{owner.address || "N/A"}</Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Percentage Owned:</Text>{" "}
                  <Text style={styles.value}>
                    {owner.percentageOwned?.toLocaleString() || "N/A"}%
                  </Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Title:</Text>{" "}
                  <Text style={styles.value}>{owner.title || "N/A"}</Text>
                </View>
                {index < applicationData.ownershipInfo.owners.length - 1 && (
                  <View style={styles.hr} />
                )}
              </View>
            ))}
          </>
        ) : (
          <View style={styles.field}>
            <Text style={styles.label}>Owners:</Text>{" "}
            <Text style={styles.value}>No owners provided</Text>
          </View>
        )}
        <View style={styles.field}>
          <Text style={styles.label}>Personal Guarantee:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.ownershipInfo?.personalGuarantee ? "Yes" : "No"}
          </Text>
        </View>
        {applicationData.ownershipInfo?.guarantors &&
          applicationData.ownershipInfo.guarantors.length > 0 && (
            <>
              <Text style={styles.p}>
                <Text style={styles.strong}>Guarantors:</Text>
              </Text>
              {applicationData.ownershipInfo.guarantors!.map(
                (guarantor, index) => (
                  <View key={index}>
                    <View style={styles.field}>
                      <Text style={styles.label}>Name:</Text>{" "}
                      <Text style={styles.value}>
                        {guarantor.name || "N/A"}
                      </Text>
                    </View>
                    <View style={styles.field}>
                      <Text style={styles.label}>Address:</Text>{" "}
                      <Text style={styles.value}>
                        {guarantor.address || "N/A"}
                      </Text>
                    </View>
                    <View style={styles.field}>
                      <Text style={styles.label}>Phone:</Text>{" "}
                      <Text style={styles.value}>
                        {guarantor.phone || "N/A"}
                      </Text>
                    </View>
                    {index <
                      applicationData.ownershipInfo!.guarantors!.length - 1 && (
                      <View style={styles.hr} />
                    )}
                  </View>
                )
              )}
            </>
          )}
      </View>

      <View style={styles.section}>
        <Text style={styles.h3}>Legal Questions</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Outstanding Judgments:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.legalQuestions?.outstandingJudgments
              ? "Yes"
              : "No"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Bankruptcy History:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.legalQuestions?.bankruptcyHistory ? "Yes" : "No"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Pending Lawsuits:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.legalQuestions?.pendingLawsuits ? "Yes" : "No"}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.h3}>Documents</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Uploaded Documents:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.documents?.uploaded?.join(", ") || "None"}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Required Documents:</Text>{" "}
          <Text style={styles.value}>
            {applicationData.documents?.required?.join(", ") || "None"}
          </Text>
        </View>
      </View>

      <View style={styles.signatureSection}>
        <Text style={styles.p}>
          By signing below, I certify that the information provided is true and
          accurate.
        </Text>
        <View style={styles.signatureRow}>
          <View>
            <Text style={styles.signatureLine}></Text>
            <Text style={styles.signatureText}>Signature</Text>
          </View>
          <View>
            <Text style={styles.signatureLine}></Text>
            <Text style={styles.signatureText}>Date</Text>
          </View>
        </View>
        <Text style={styles.printName}>
          Print Name: {applicationData.applicantInfo?.fullName || "N/A"}
        </Text>
      </View>
    </Page>
  </Document>
);

export async function generatePDF(
  applicationData: ApplicationData
): Promise<Blob> {
  const pdfBlob = await pdf(
    <ApplicationPdfDocument applicationData={applicationData} />
  ).toBlob();
  return pdfBlob;
}
