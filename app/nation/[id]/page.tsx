import PageHeader from "./PageHeader";
import NationFlag from "./NationFlag";
import NationName from "./NationName";
import NationDescription from "./NationDescription";
import styles from "./nation.module.css";

export default async function NationPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // Decodes "Snow%20Society" back into "Snow Society"
  const nationId = decodeURIComponent(resolvedParams.id);

  return (
    <div className={styles.pageContainer}>
      
      {/* Top Header */}
      <PageHeader />

      {/* Main Layout Grid */}
      <div className={styles.mainGrid}>
        
        {/* Left Column (Flag) */}
        <div className={styles.leftColumn}>
          <NationFlag />
        </div>

        {/* Right Column (Name & Details) */}
        <div className={styles.rightColumn}>
          <NationName name={nationId} />
          <NationDescription />
        </div>

      </div>
    </div>
  );
}