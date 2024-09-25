import { Card, Form, Radio, Button, Typography, Row, Col, Progress, Space, message, Spin } from 'antd';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import backgroundImage from './ass.jpg'; // Import your image
import './Assement.css'; // Ensure this CSS is updated accordingly

const { Title, Text } = Typography;

const AssessmentTest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setQuestions([
        {
          question: "1. What is React?",
          options: [
            { value: "a", label: "A JavaScript framework" },
            { value: "b", label: "A JavaScript library" },
            { value: "c", label: "A CSS framework" },
            { value: "d", label: "None of the above" },
          ],
          correctAnswer: "b",
        },
        {
          question: "2. What is Node.js?",
          options: [
            { value: "a", label: "A frontend library" },
            { value: "b", label: "A backend runtime" },
            { value: "c", label: "A database" },
            { value: "d", label: "A cloud service" },
          ],
          correctAnswer: "b",
        },
        {
          question: "3. What does CSS stand for?",
          options: [
            { value: "a", label: "Cascading Style Sheets" },
            { value: "b", label: "Custom Style Sheets" },
            { value: "c", label: "Creative Style Sheets" },
            { value: "d", label: "Cascading Simple Sheets" },
          ],
          correctAnswer: "a",
        },
      ]);
    };

    fetchQuestions();
  }, []);

  const handleFinish = (values) => {
    setLoading(true);
    let tempScore = 0;
    questions.forEach((question, index) => {
      if (values[`question${index + 1}`] === question.correctAnswer) {
        tempScore += 1;
      }
    });
    setScore(tempScore);
    setSubmitted(true);
    setProgress(100);
    message.success('Test submitted successfully!');
    setLoading(false);
  };

  const handleRetry = () => {
    setSubmitted(false);
    setScore(0);
    setProgress(0);
    setQuestions([]);
  };

  return (
    <div className="assessment-test-background">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={2} className="assessment-title">
          Assessment Test
        </Title>
      </motion.div>

      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={16}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card
              className="assessment-card"
              style={{
                padding: '40px',
              }}
            >
              {!submitted ? (
                <>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.7 }}
                  >
                    <Progress
                      percent={progress}
                      showInfo={false}
                      strokeColor={{ from: '#108ee9', to: '#87d068' }}
                      style={{ marginBottom: '20px', height: '10px' }}
                    />
                  </motion.div>

                  <Form layout="vertical" onFinish={handleFinish}>
                    {questions.map((q, index) => (
                      <motion.div
                        key={index}
                        className="question-text"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                      >
                        <Form.Item label={q.question} name={`question${index + 1}`} style={{ marginBottom: '20px' }}>
                          <Radio.Group>
                            {q.options.map((option) => (
                              <Radio value={option.value} key={option.value}>
                                {option.label}
                              </Radio>
                            ))}
                          </Radio.Group>
                        </Form.Item>
                      </motion.div>
                    ))}

                    <Form.Item>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="primary"
                          block
                          htmlType="submit"
                          className="submit-button"
                        >
                          {loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : 'Submit Test'}
                        </Button>
                      </motion.div>
                    </Form.Item>
                  </Form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ textAlign: 'center' }}
                >
                  <Space direction="vertical">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <CheckCircleOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
                    </motion.div>
                    <Text className="result-text" strong style={{ fontSize: '22px' }}>
                      Thank you for submitting the test! Your score: <span style={{ color: '#ff4d4f' }}>{score}/{questions.length}</span>
                    </Text>
                    <motion.div
                      className="result-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Text style={{ fontSize: '18px', color: '#888' }}>
                        You got {((score / questions.length) * 100).toFixed(0)}% correct!
                      </Text>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button type="primary" onClick={handleRetry} className="retry-button">
                        Retake Test
                      </Button>
                    </motion.div>
                  </Space>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default AssessmentTest;
