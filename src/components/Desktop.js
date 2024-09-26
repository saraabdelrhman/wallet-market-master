import React from "react";

const styles = {
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 120,
    paddingRight: 120,
    background: '#F9FAFC',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40,
  },
  headerContainer: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  titleText: {
    color: '#0A2540',
    fontSize: '3rem',
    fontWeight: 'bold',
    fontFamily: 'Inter, sans-serif',
    marginBottom: '20px',
  },
  descriptionText: {
    color: '#4A4A4A',
    fontSize: '1.2rem',
    fontFamily: 'Inter, sans-serif',
    marginBottom: '40px',
  },
  toggleContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    padding: '10px 20px',
    background: '#E5E8EC',
    borderRadius: 30,
  },
  toggleText: {
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
  },
  toggleActive: {
    color: '#fff',
    background: '#0A2540',
    padding: '8px 20px',
    borderRadius: '20px',
  },
  planGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px',
  },
  planCard: {
    padding: '40px',
    borderRadius: '16px',
    backgroundColor: 'white',
    cursor: 'pointer',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  planCardHover: {
    transform: 'scale(1.01)',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
  },
  planHeader: {
    padding: '8px 20px',
    borderRadius: '20px',
    background: '#D1E3FF',
    color: '#0A2540',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  planPrice: {
    fontSize: '2.5rem',
    color: '#0A2540',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  perMonthText: {
    fontSize: '1rem',
    color: '#7D7D7D',
    marginBottom: '30px',
  },
  featureList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    marginBottom: '30px',
  },
  featureItem: {
    fontSize: '1rem',
    color: '#4A4A4A',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  checkIcon: {
    width: '15px',
    height: '15px',
    backgroundColor: '#0A2540',
    borderRadius: '50%',
    display: 'inline-block',
  },
  choosePlanButton: {
    padding: '12px 30px',
    borderRadius: '30px',
    backgroundColor: '#0A2540',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
};

export default function Desktop() {
  const [isYearly, setIsYearly] = React.useState(false);
  
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.headerContainer}>
        <div style={styles.titleText}>Choose the plan that’s perfect for your business.</div>
        <div style={styles.descriptionText}>
          Explore our flexible pricing options and select the one that fits your business needs the best.
        </div>
      </div>
      
      {/* Toggle */}
      <div style={styles.toggleContainer}>
        <div
          style={{ ...styles.toggleText, ...(isYearly ? null : styles.toggleActive) }}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </div>
        <div
          style={{ ...styles.toggleText, ...(isYearly ? styles.toggleActive : null) }}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </div>
      </div>
      
      {/* Plans */}
      <div style={styles.planGrid}>
        {[
          { name: "Standard", price: isYearly ? 120 : 12, features: ["User Dashboard", "Post 3 Ads per week", "Multiple images & videos", "Basic customer support"] },
          { name: "Premium", price: isYearly ? 250 : 25, features: ["User Dashboard", "Post 3 Ads per week", "Multiple images & videos", "Featured ads", "Call to Action", "Max 12 team members"] },
          { name: "Business", price: isYearly ? 490 : 49, features: ["User Dashboard", "Post 3 Ads per week", "Multiple images & videos", "Special ads badge", "Call to Action", "Max 20 team members"] }
        ].map((plan, index) => (
          <div
            key={plan.name}
            style={styles.planCard}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={styles.planHeader}>{plan.name}</div>
            <div style={styles.planPrice}>${plan.price}</div>
            <div style={styles.perMonthText}>{isYearly ? "/Per Year" : "/Per Month"}</div>
            <ul style={styles.featureList}>
              {plan.features.map((feature, i) => (
                <li key={i} style={styles.featureItem}>
                  <span style={styles.checkIcon} />
                  {feature}
                </li>
              ))}
            </ul>
            <div style={styles.choosePlanButton}>
              Choose Plan
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
