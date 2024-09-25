import { Card, Col, Row, Typography, Modal } from 'antd';
import { useState } from 'react';
import { motion } from 'framer-motion';

const { Title } = Typography;

const courses = [
  {
    title: 'Gen AI',
    description: 'Learn the basics of Gen AI',
    video: 'https://www.youtube.com/embed/lv7ka-8FscI',
  },
  {
    title: 'Python',
    description: 'Deep dive into Python programming',
    video: 'https://www.youtube.com/embed/6R0TkF6Mgrk',
  },
  {
    title: 'Node.js Fundamentals',
    description: 'Master backend development with Node.js',
    video: 'https://www.youtube.com/embed/BLl32FvcdVM',
  },
  {
    title: 'Company Policies',
    description: 'Understand company guidelines',
    video: 'https://www.youtube.com/embed/ui5IrGChLu8',
  },
];

const Courses = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const showVideo = (video) => {
    setSelectedVideo(video);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedVideo(null);
  };

  return (
    <div style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: '#1890ff' }}>
        Explore Training Courses
      </Title>
      <Row gutter={[16, 16]}>
        {courses.map((course, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                hoverable
                title={course.title}
                bordered={false}
                onClick={() => showVideo(course.video)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #e0f7fa, #b2dfdb)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
                bodyStyle={{ textAlign: 'center', fontWeight: '500', fontSize: '14px', minHeight: '120px' }}
              >
                <p>{course.description}</p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Modal
        visible={isModalVisible}
        title={<span style={{ color: '#1890ff' }}>Course Video Viewer</span>}
        onCancel={handleCancel}
        footer={null}
        width={800}
        bodyStyle={{ textAlign: 'center', padding: '20px' }}
        style={{ borderRadius: '12px' }}
      >
        {selectedVideo ? (
          <motion.iframe
            width="100%"
            height="315"
            src={selectedVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <p>Loading video...</p>
        )}
      </Modal>
    </div>
  );
};

export default Courses;
