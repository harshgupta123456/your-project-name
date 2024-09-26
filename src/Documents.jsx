import { Table, Typography, Button, Space, Modal } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Documents.css'; // Import your CSS file

const { Title, Paragraph } = Typography;

const dataSource = [
  {
    key: '1',
    title: 'Project Report',
    category: 'Reports',
    description: 'Detailed report on project progress and outcomes.',
    link: 'https://gbihr.org/images/docs/test.pdf', // External link for both viewing and download
  },
  {
    key: '2',
    title: 'Research Paper',
    category: 'Research',
    description: 'In-depth analysis on a specific research topic.',
    link: 'https://gbihr.org/images/docs/test.pdf', // External link for both viewing and download
  },
  {
    key: '3',
    title: 'T Document',
    category: 'Miscellaneous',
    description: 'General documentation related to the project.',
    link: 'https://gbihr.org/images/docs/test.pdf', // External link for both viewing and download
  },
];

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
        {/* View button to open the PDF in modal */}
        <Button
          type="primary"
          icon={<EyeOutlined />}
          size="middle"
          onClick={() => showModal(record.link)} // Show PDF in modal for viewing
        >
          View
        </Button>

        {/* Download button to directly download the PDF */}
        <a href={record.link} download>
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

  // Function to show modal and view the PDF
  const showModal = (url) => {
    setPdfUrl(url); // Directly set the PDF URL for viewing
    setIsModalVisible(true);
  };

  // Function to close the modal
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
        columns={columns(showModal)} // Pass showModal for view action
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
      />

      {/* Modal to view PDF */}
      <Modal
        title="View Document"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {/* Display the PDF in an iframe */}
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
