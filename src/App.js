import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Typography, Button, Input, Row, Col } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  FileOutlined,
  UserOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

import LoginForm from './Login';
import Courses from './Training';
import Documents from './Documents';
import AssessmentTest from './AssessmentTest';
import AboutUs from './AboutUs';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
        {/* Sidebar with navigation */}
        <Sider
          collapsible
          style={{
            background: '#fff',
            boxShadow: '2px 0 6px rgba(0,0,0,0.1)',
          }}
        >
          <div className="logo" style={{ textAlign: 'center', padding: '20px' }}>
            <img
              src={`${process.env.PUBLIC_URL}/logo-aristia-ai.png`}
              alt="Aristia AI Logo"
              style={{
                width: '100%',
                maxWidth: '200px',
                marginBottom: '20px',
              }}
            />
          </div>
          <Menu theme="light" mode="inline" style={{ fontSize: '16px' }}>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              <Link to="/courses">Trainings</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              <Link to="/documents">Documents</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to="/assessment">Assessment Test</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          {/* Header */}
          <Header className="site-layout-background" style={{ padding: 0, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />

          {/* Content */}
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Row gutter={16}>
                      <Col span={12}>
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          style={{ textAlign: 'center', padding: '50px' }}
                        >
                          <Title level={1} style={{ fontSize: '48px', color: '#1890ff', fontWeight: 'bold' }}>
                            Welcome to Aristia AI
                          </Title>
                          <Paragraph style={{ fontSize: '20px', marginBottom: '30px', color: '#595959', fontStyle: 'italic' }}>
                            Transforming Your Business with Next-Gen AI Solutions
                          </Paragraph>
                          <Link to="/about">
                            <Button
                              type="primary"
                              size="large"
                              style={{ borderRadius: '8px', padding: '0 30px', transition: 'background-color 0.3s', ':hover': { backgroundColor: '#40a9ff' } }}
                            >
                              Learn More About Us
                            </Button>
                          </Link>
                        </motion.div>
                      </Col>
                      <Col span={12}>
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          style={{ textAlign: 'center', padding: '50px' }}
                        >
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/wFNo8a_Igo0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                              border: 'none',
                              borderRadius: '8px',
                              transition: 'transform 0.3s',
                            }}
                          />
                        </motion.div>
                      </Col>
                    </Row>
                  }
                />
                <Route path="/courses" element={<Courses />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/assessment" element={<AssessmentTest />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
            </div>
          </Content>

          {/* Enhanced Footer */}
          <Footer style={{ textAlign: 'center', backgroundColor: '#1c1c1c', color: '#fff', padding: '50px', boxShadow: '0 -2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: '30%', textAlign: 'left' }}
              >
                <Title level={3} style={{ color: '#fff' }}>Aristia AI</Title>
                <Paragraph style={{ color: '#d3d3d3' }}>
                  Innovating the future with AI solutions.
                </Paragraph>
                <div style={{ fontSize: '24px' }}>
                  <motion.a
                    href="https://facebook.com"
                    style={{ margin: '0 10px', color: '#fff', transition: 'color 0.3s' }}
                    whileHover={{ scale: 1.2, color: '#3b5998' }}
                  >
                    <FacebookOutlined />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    style={{ margin: '0 10px', color: '#fff', transition: 'color 0.3s' }}
                    whileHover={{ scale: 1.2, color: '#C13584' }}
                  >
                    <InstagramOutlined />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    style={{ margin: '0 10px', color: '#fff', transition: 'color 0.3s' }}
                    whileHover={{ scale: 1.2, color: '#1DA1F2' }}
                  >
                    <TwitterOutlined />
                  </motion.a>
                  <motion.a
                    href="https://youtube.com"
                    style={{ margin: '0 10px', color: '#fff', transition: 'color 0.3s' }}
                    whileHover={{ scale: 1.2, color: '#FF0000' }}
                  >
                    <YoutubeOutlined />
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ width: '30%', textAlign: 'left' }}
              >
                <Title level={4} style={{ color: '#fff' }}>Contact Us</Title>
                <Paragraph style={{ color: '#d3d3d3' }}>+91-124-4417354</Paragraph>
                <Paragraph style={{ color: '#d3d3d3' }}>business.desk@aristia-ai.com</Paragraph>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{ width: '30%', textAlign: 'left' }}
              >
                <Title level={4} style={{ color: '#fff' }}>Stay Updated</Title>
                <Input
                  placeholder="Your email for updates"
                  style={{
                    marginBottom: '10px',
                    borderRadius: '5px',
                    borderColor: '#fff',
                    backgroundColor: '#2c2c2c',
                    color: '#fff',
                  }}
                />
                <TextArea
                  placeholder="Enter your message"
                  rows={2}
                  style={{
                    marginBottom: '10px',
                    borderRadius: '5px',
                    borderColor: '#fff',
                    backgroundColor: '#2c2c2c',
                    color: '#fff',
                  }}
                />
                <Button
                  type="primary"
                  size="large"
                  style={{ width: '100%', borderRadius: '8px', backgroundColor: '#1890ff' }}
                >
                  Submit
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ marginTop: '30px', fontSize: '16px', color: '#d3d3d3' }}
            >
              2024 Aristia AI. All rights reserved.
            </motion.div>
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
