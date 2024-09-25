import { Table, Typography, Button, Space, Modal } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Documents.css'; // Import your CSS file

const { Title, Paragraph } = Typography;

// Sample data for documents with updated PDF names
const dataSource = [
  {
    key: '1',
    title: 'Project Report',
    category: 'Reports',
    description: 'Detailed report on project progress and outcomes.',
    link: '/pdf/project report.pdf', // Updated link
  },
  {
    key: '2',
    title: 'Research Paper',
    category: 'Research',
    description: 'In-depth analysis on a specific research topic.',
    link: '/downloads/Research-Paper.pdf', // Updated link
  },
  {
    key: '3',
    title: 'T Document',
    category: 'Miscellaneous',
    description: 'General documentation related to the project.',
    link: '/downloads/T.pdf', // Updated link
  },
];

// Column configuration for the Ant Design table
const columns = (showModal) => [
  {
    title: 'Document Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <strong>{text}</strong>,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Action',
    dataIndex: 'link',
    key: 'link',
    render: (text, record) => (
      <Space size="middle">
        <Button
          type="primary"
          icon={<EyeOutlined />}
          size="middle"
          onClick={() => showModal(record.link)} // Use showModal here
        >
          View
        </Button>
        <a href={record.link}>
          <Button type="primary" icon={<DownloadOutlined />} size="middle">
            Download
          </Button>
        </a>
      </Space>
    ),
  },
];

const Documents = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const showModal = (url) => {
    setPdfUrl(url);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Framer Motion animation for table rows
  const AnimatedRow = motion.tr;

  return (
    <div className="documents-container">
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
        Documents
      </Title>
      <Paragraph style={{ textAlign: 'center', marginBottom: '40px', fontSize: '16px' }}>
        Below is a list of essential documents related to our operations. You can view or download each document.
      </Paragraph>
      <Table
        dataSource={dataSource}
        columns={columns(showModal)} // Pass showModal to columns
        pagination={false}
        bordered
        rowClassName="animated-row"
        components={{
          body: {
            row: ({ children, ...rest }) => (
              <AnimatedRow
                {...rest}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </AnimatedRow>
            ),
          },
        }}
        style={{ backgroundColor: '#fff' }}
        onRow={(record) => ({
          onMouseEnter: () => {
            // Optional hover effect
          },
        })}
      />

      <Modal
        title="View Document"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <iframe
          src={pdfUrl}
          width="100%"
          height="600px"
          title="PDF Document"
        />
      </Modal>
    </div>
  );
};

export default Documents;
