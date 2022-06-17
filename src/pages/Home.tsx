import React from "react";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Table from "../components/table";
import WidgetSm from "../components/widget";
import { Paper } from "@mui/material";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaKey, FaUser } from "react-icons/fa";
import "../components/style.css";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "black" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      axis: "y",
      label: "Yellow",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: ["yellow"],
      borderColor: ["yellow"],
      height: "60px",
    },
    {
      axis: "y",
      label: "Green",
      data: [52, 80, 81, 56, 56, 40, 36],
      fill: false,
      backgroundColor: ["green"],
      borderColor: ["green"],
      height: "60px",
    },
  ],
};

const sideBarData = {
  labels: ["Pending", "Cancel", "Done"],
  datasets: [
    {
      axis: "x",
      data: [10, 90, 80],
      fill: true,
      backgroundColor: ["orange", "red", "lightgreen"],
      borderColor: ["orange", "red", "lightgreen"],
      height: "60px",
    },
  ],
};

export const sideBarOptions = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Booked Rooms",
    },
  },
};

const doData = {
  labels: ["available", "Unavailable"],
  datasets: [
    {
      label: "Rooms Avalaible",
      data: [300, 150],
      backgroundColor: ["lightgreen", "lightgrey"],
      hoverOffset: 1,
    },
  ],
};

const doDataTwo = {
  datasets: [
    {
      data: [260, 190],
      backgroundColor: ["yellow", "lightgrey"],
      hoverOffset: 1,
    },
  ],
};

const doDataOne = {
  datasets: [
    {
      data: [300, 150],
      backgroundColor: ["green", "lightgrey"],
      hoverOffset: 1,
    },
  ],
};

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className="text">
                    <h1>714k</h1>
                    <br />
                    <p> Total Booking</p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <img
                    className="photo"
                    src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                  ></img>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className="text">
                    <h1>311k</h1>
                    <br />
                    <p> Check In</p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <img
                    className="photo"
                    src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                  ></img>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className="text">
                    <h1>124k</h1>
                    <br />
                    <p> Check Out</p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <img
                    className="photo"
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                  ></img>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid container spacing={2} item xs={8}>
            <Grid item xs={6}>
              <Item sx={{ backgroundColor: "lightgreen" }}>
                <Line data={lineData} />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Bar data={sideBarData} options={sideBarOptions} />
              </Item>
            </Grid>

            <Grid container spacing={1} item xs={12}>
              <Grid item xs={6}>
                <Grid container spacing={1} item xs={12}>
                  <Grid item xs={6}>
                    <Doughnut data={doDataOne} />
                  </Grid>
                  <Grid item xs={6}>
                    <div className="doughnuts">
                      <h1>38,566</h1>
                      <br />
                      <h5>Check In</h5>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1} item xs={12}>
                  <Grid item xs={6}>
                    <Doughnut data={doDataTwo} />
                  </Grid>
                  <Grid item xs={6}>
                    <div className="doughnuts">
                      <h1>18,472</h1>
                      <br />
                      <h5>Check Out</h5>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4} md={6} lg={4}>
            <Item>
              <Doughnut data={doData} />
              <div>
                <h3>Available: 300</h3>
                <h3>Unavailable: 150</h3>
                <br />
                <br />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  aut recusandae possimus, hic cum molestias deleniti! Dolorum
                  iste numquam officiis commodi, veritatis dolore ab quam
                  deleniti assumenda, doloribus inventore totam. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Doloribus
                  pariatur labore nihil rerum id quia provident voluptatum
                  accusamus aliquid perspiciatis delectus officia, corrupti
                  eveniet! Excepturi natus corporis dolorum quisquam veniam.
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Bar data={barData} />
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item>
              <WidgetSm />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Box>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <Card style={styles.cardStyle}>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <img
                            className="user"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                          ></img>
                        </Grid>
                        <Grid item xs={8}>
                          <h1>UserName</h1>
                          <br />
                          <h3>Juntember 32nd 1999</h3>
                        </Grid>
                      </Grid>

                      <Grid container spacing={1}>
                        <Grid item xs={5} m={1}>
                          <FaKey></FaKey>
                          <h3>Room A 1221</h3>
                        </Grid>
                        <Grid item xs={5} m={2}>
                          <FaUser></FaUser>
                          <h3>Person</h3>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <img
                            className="photo"
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          ></img>
                        </Grid>
                      </Grid>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={styles.cardStyle}>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <img
                            className="user"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                          ></img>
                        </Grid>
                        <Grid item xs={8}>
                          <h1>UserName</h1>
                          <br />
                          <h3>Juntember 32nd 1999</h3>
                        </Grid>
                      </Grid>

                      <Grid container spacing={1}>
                        <Grid item xs={5} m={1}>
                          <FaKey></FaKey>
                          <h3>Room A 1221</h3>
                        </Grid>
                        <Grid item xs={5} m={2}>
                          <FaUser></FaUser>
                          <h3>Person</h3>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <img
                            className="photo"
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          ></img>
                        </Grid>
                      </Grid>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={styles.cardStyle}>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <img
                            className="user"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                          ></img>
                        </Grid>
                        <Grid item xs={8}>
                          <h1>UserName</h1>
                          <br />
                          <h3>Juntember 32nd 1999</h3>
                        </Grid>
                      </Grid>

                      <Grid container spacing={1}>
                        <Grid item xs={5} m={1}>
                          <FaKey></FaKey>
                          <h3>Room A 1221</h3>
                        </Grid>
                        <Grid item xs={5} m={2}>
                          <FaUser></FaUser>
                          <h3>Person</h3>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <img
                            className="photo"
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          ></img>
                        </Grid>
                      </Grid>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={styles.cardStyle}>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <img
                            className="user"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                          ></img>
                        </Grid>
                        <Grid item xs={8}>
                          <h1>UserName</h1>
                          <br />
                          <h3>Juntember 32nd 1999</h3>
                        </Grid>
                      </Grid>

                      <Grid container spacing={1}>
                        <Grid item xs={5} m={1}>
                          <FaKey></FaKey>
                          <h3>Room A 1221</h3>
                        </Grid>
                        <Grid item xs={5} m={2}>
                          <FaUser></FaUser>
                          <h3>Person</h3>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <img
                            className="photo"
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          ></img>
                        </Grid>
                      </Grid>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card style={styles.cardStyle}>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <img
                            className="user"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                          ></img>
                        </Grid>
                        <Grid item xs={8}>
                          <h1>UserName</h1>
                          <br />
                          <h3>Juntember 32nd 1999</h3>
                        </Grid>
                      </Grid>

                      <Grid container spacing={1}>
                        <Grid item xs={5} m={1}>
                          <FaKey></FaKey>
                          <h3>Room A 1221</h3>
                        </Grid>
                        <Grid item xs={5} m={2}>
                          <FaUser></FaUser>
                          <h3>Person</h3>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <img
                            className="photo"
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          ></img>
                        </Grid>
                      </Grid>
                    </Card>
                  </SwiperSlide>
                  ...
                </Swiper>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Table />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const styles = {
  cardStyle: {
    height: " 100%",
    width: "100%",
    borderRadius: "5%",
    backgroundColor: "#9999FF",
    margin: "2%",
  },
};
export default Home;
