import { Form, Input, Button, Card, Row, Col, Typography, message } from 'antd';
import { useState } from 'react';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      if (isCreatingAccount) {
        message.success('Account created successfully! You can now log in.');
      } else {
        message.success('Login successful!');
      }
      setLoading(false);
    }, 1500);
  };

  const onFinishFailed = () => {
    message.error('Please fill in the required fields!');
  };

  const toggleAccountMode = () => {
    setIsCreatingAccount(!isCreatingAccount);
  };

  const handleForgotPassword = () => {
    message.info('Forgot Password link clicked!'); // You can add actual navigation here
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)',
      }}
    >
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Card
            style={{
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
              borderRadius: '15px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #ffffff, #e6f7ff)',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Title
                level={3}
                style={{
                  textAlign: 'center',
                  color: '#1890ff',
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}
              >
                {isCreatingAccount ? 'Create Your Account' : 'Welcome Back!'}
              </Title>
              <Text style={{ textAlign: 'center', display: 'block', marginBottom: 24 }}>
                {isCreatingAccount ? 'Sign up to get started' : 'Please login to continue'}
              </Text>
            </motion.div>

            <Form
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ transition: 'all 0.5s ease-in-out' }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please enter your username' }]}
                >
                  <Input
                    placeholder="Enter your username"
                    style={{
                      borderRadius: '8px',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#40a9ff'}
                    onBlur={(e) => e.target.style.borderColor = '#d9d9d9'}
                  />
                </Form.Item>
              </motion.div>

              {isCreatingAccount && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                  >
                    <Input
                      placeholder="Enter your email"
                      style={{
                        borderRadius: '8px',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#40a9ff'}
                      onBlur={(e) => e.target.style.borderColor = '#d9d9d9'}
                    />
                  </Form.Item>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please enter your password' }]}
                >
                  <Input.Password
                    placeholder="Enter your password"
                    style={{
                      borderRadius: '8px',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#40a9ff'}
                    onBlur={(e) => e.target.style.borderColor = '#d9d9d9'}
                  />
                </Form.Item>
              </motion.div>

              {isCreatingAccount && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                >
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                      { required: true, message: 'Please confirm your password' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('Passwords do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      placeholder="Confirm your password"
                      style={{
                        borderRadius: '8px',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#40a9ff'}
                      onBlur={(e) => e.target.style.borderColor = '#d9d9d9'}
                    />
                  </Form.Item>
                </motion.div>
              )}

              <Form.Item>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="primary"
                    block
                    htmlType="submit"
                    loading={loading}
                    style={{
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s',
                    }}
                  >
                    {isCreatingAccount ? 'Create Account' : 'Login'}
                  </Button>
                </motion.div>
              </Form.Item>
            </Form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ textAlign: 'center', marginTop: 16 }}
            >
              <Text>
                {isCreatingAccount ? 'Already have an account?' : "Don't have an account?"}
              </Text>
              <Button
                type="link"
                onClick={toggleAccountMode}
                style={{ color: '#1890ff', fontWeight: 'bold' }}
              >
                {isCreatingAccount ? 'Login' : 'Create one'}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ textAlign: 'center', marginTop: 16 }}
            >
              <Button
                type="link"
                onClick={handleForgotPassword}
                style={{ color: '#1890ff', fontWeight: 'bold' }}
              >
                Forgot Password?
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </Col>
    </Row>
  );
};

export default LoginForm;

// CSS for Background Animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes backgroundAnimation {
    0% { background-color: #e0f7fa; }
    100% { background-color: #f1f8e9; }
  }
`;
document.head.appendChild(style);
