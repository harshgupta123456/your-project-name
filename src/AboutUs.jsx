import React from 'react';
import { Card, Col, Row, Typography, Divider, Button } from 'antd';
import { LinkedinFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    name: 'Ram Sharma',
    photo: '/ram sir.jpg',
    introduction: 'Ram Sharma is a trailblazing AI & Advanced Analytics entrepreneur, advisor, investor, and philanthropist with a remarkable career spanning multiple industries, including Life Sciences, Retail, CPG, Insurance, Telecom, and Financial Services.',
    role: 'Co-Founder & Chairman',
    linkedin: 'https://www.linkedin.com/in/ram-sharma',
  },
  {
    name: 'Amisha Saxena',
    photo: '/amesha.jpg',
    introduction: 'Amisha Saxena is an accomplished data analytics leader with an impressive track record spanning over 20 years in the healthcare, life sciences, and insurance sectors.',
    role: 'Co-Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/amisha-saxena',
  },
  {
    name: 'Shailesh Giri',
    photo: '/shailesh-giri-.jpeg',
    introduction: 'Shailesh Giri stands as an esteemed Chief Data Officer, with over 15 years of extensive expertise in steering data science leadership.',
    role: 'Co-Founder & Chief Data & AI Officer',
    linkedin: 'https://www.linkedin.com/in/shailesh-giri',
  },
  // Add more team members as needed
];

const AboutUs = () => {
  return (
    <div style={{ padding: '60px 30px', backgroundColor: '#f0f2f5' }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', fontFamily: 'Roboto, sans-serif', color: '#2c3e50', letterSpacing: '1px' }}>
          About Us
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '18px', marginBottom: '50px', color: '#7f8c8d', lineHeight: '1.8', maxWidth: '800px', margin: 'auto' }}>
          We are Aristia AI, dedicated to advancing technology and innovation in the field of artificial intelligence to make a positive impact across industries.
        </Paragraph>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)', marginBottom: '50px' }}
      >
        <Title level={4} style={{ textAlign: 'center', marginBottom: '20px', color: '#2980b9', fontFamily: 'Roboto, sans-serif' }}>Our Mission</Title>
        <Divider />
        <Paragraph style={{ textAlign: 'center', fontSize: '16px', color: '#7f8c8d', lineHeight: '1.7' }}>
          At Aristia AI, we strive to create cutting-edge AI solutions that empower businesses and enhance everyday life through smart technology.
        </Paragraph>
        <Divider />
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Button
            type="primary"
            style={{ display: 'block', margin: '30px auto', transition: '0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'}
            onClick={() => window.open('https://aristia-ai.com/', '_blank')}
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      <Row gutter={24} justify="center">
        {teamMembers.map((member, index) => (
          <Col span={8} key={index} style={{ marginBottom: '30px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                hoverable
                cover={<img alt={member.name} src={member.photo} style={{ height: '320px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />}
                style={{ borderRadius: '10px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}
              >
                <Card.Meta
                  title={<span style={{ fontWeight: '600', fontSize: '20px', color: '#2c3e50', fontFamily: 'Roboto, sans-serif' }}>{member.name}</span>}
                  description={
                    <>
                      <p style={{ margin: '10px 0 0', fontStyle: 'italic', color: '#95a5a6' }}>{member.role}</p>
                      <p style={{ color: '#7f8c8d', lineHeight: '1.8', fontSize: '15px' }}>{member.introduction}</p>
                      <Button
                        type="link"
                        icon={<LinkedinFilled />}
                        href={member.linkedin}
                        target="_blank"
                        style={{ padding: 0, color: '#2980b9' }}
                      >
                        LinkedIn
                      </Button>
                    </>
                  }
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutUs;
