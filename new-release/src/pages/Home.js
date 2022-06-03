import React from "react";
import Header from "./Components/Header";
import redlogo from "./../logos/logo-red.png";
import adversery from "./../logos/adversery.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="m-0 p-0">
      <div class="backgroundImg row">
        <div class="col-md-6">
          <div class="introText">
            <h2 class="">We are Securing Businesses from</h2>
            <h1>Cyber-Threats</h1>
            <p>
              Achieve new levels of security with analytics based on real-time
              Cyber Security information. It's simple. We can help you identify
              real threats to your assets, reputation, and bottom line faster
              for you to make the right decisions.
            </p>

            <button class="btn homeBtn">
              <a href="#scrollspyHeading1" class="homeBtnLink">
                Get Secure
              </a>
            </button>
          </div>
        </div>
        <div class="col-md-6 imageView"></div>
      </div>

      <div class="ParentDiv">
        <div class="marginFill"></div>

        <div class="fullPage AboutDiv row" id="scrollspyHeading1">
          <div class="col-md-5 text-center">
            <div class="colContent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                zoomAndPan="magnify"
                viewBox="0 0 375 374.999991"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
              >
                <path
                  fill="#ffffff"
                  d="M 150 181.25 C 150 174.339844 155.589844 168.75 162.5 168.75 L 162.5 156.25 C 162.5 142.429688 173.679688 131.25 187.5 131.25 C 201.316406 131.25 212.5 142.429688 212.5 156.25 L 212.5 168.75 C 219.410156 168.75 225 174.339844 225 181.25 L 225 231.25 C 225 238.160156 219.410156 243.75 212.5 243.75 L 162.5 243.75 C 155.589844 243.75 150 238.160156 150 231.25 Z M 106.25 212.5 L 106.25 243.75 C 106.25 257.566406 117.429688 268.75 131.25 268.75 L 243.75 268.75 C 257.566406 268.75 268.75 257.566406 268.75 243.75 L 268.75 131.25 C 268.75 117.429688 257.566406 106.25 243.75 106.25 L 131.25 106.25 C 117.429688 106.25 106.25 117.429688 106.25 131.25 L 106.25 212.5 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 200 37.5 C 200 30.589844 194.410156 25 187.5 25 C 180.589844 25 175 30.589844 175 37.5 C 175 44.410156 180.589844 50 187.5 50 C 194.410156 50 200 44.410156 200 37.5 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 287.5 43.75 C 294.410156 43.75 300 38.160156 300 31.25 C 300 24.339844 294.410156 18.75 287.5 18.75 C 280.589844 18.75 275 24.339844 275 31.25 C 275 38.160156 280.589844 43.75 287.5 43.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 100 31.25 C 106.910156 31.25 112.5 25.660156 112.5 18.75 C 112.5 11.839844 106.910156 6.25 100 6.25 C 93.089844 6.25 87.5 11.839844 87.5 18.75 C 87.5 25.660156 93.089844 31.25 100 31.25 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 250 356.25 C 250 349.339844 244.410156 343.75 237.5 343.75 C 230.589844 343.75 225 349.339844 225 356.25 C 225 363.160156 230.589844 368.75 237.5 368.75 C 244.410156 368.75 250 363.160156 250 356.25 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 293.75 331.25 C 300.660156 331.25 306.25 325.660156 306.25 318.75 C 306.25 311.839844 300.660156 306.25 293.75 306.25 C 286.839844 306.25 281.25 311.839844 281.25 318.75 C 281.25 325.660156 286.839844 331.25 293.75 331.25 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 100 368.75 C 106.910156 368.75 112.5 363.160156 112.5 356.25 C 112.5 349.339844 106.910156 343.75 100 343.75 C 93.089844 343.75 87.5 349.339844 87.5 356.25 C 87.5 363.160156 93.089844 368.75 100 368.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 331.738281 118.75 C 338.648438 118.480469 344.019531 112.644531 343.726562 105.761719 C 343.480469 98.851562 337.671875 93.480469 330.761719 93.75 C 323.851562 94.019531 318.480469 99.851562 318.773438 106.738281 C 319.019531 113.648438 324.828125 119.019531 331.738281 118.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 356.738281 275 C 363.648438 274.730469 369.019531 268.894531 368.726562 262.011719 C 368.480469 255.101562 362.671875 249.730469 355.761719 250 C 348.851562 250.269531 343.480469 256.101562 343.773438 262.988281 C 344.019531 269.898438 349.828125 275.269531 356.738281 275 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 356.738281 175 C 363.648438 174.730469 369.019531 168.894531 368.726562 162.011719 C 368.480469 155.101562 362.671875 149.730469 355.761719 150 C 348.851562 150.269531 343.480469 156.101562 343.773438 162.988281 C 344.019531 169.898438 349.828125 175.269531 356.738281 175 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 43.261719 118.75 C 50.171875 119.019531 55.980469 113.648438 56.226562 106.738281 C 56.519531 99.851562 51.148438 94.019531 44.238281 93.75 C 37.351562 93.480469 31.519531 98.851562 31.25 105.761719 C 30.980469 112.644531 36.351562 118.480469 43.261719 118.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 56.226562 287.988281 C 56.519531 281.101562 51.148438 275.269531 44.238281 275 C 37.351562 274.730469 31.519531 280.101562 31.25 287.011719 C 30.980469 293.894531 36.351562 299.730469 43.261719 300 C 50.171875 300.269531 55.980469 294.898438 56.226562 287.988281 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 18.261719 212.5 C 25.148438 212.769531 30.980469 207.398438 31.25 200.488281 C 31.371094 196.996094 30.054688 193.773438 27.808594 191.40625 L 25 193.75 L 27.808594 191.40625 C 25.660156 189.136719 22.632812 187.644531 19.238281 187.5 C 12.355469 187.230469 6.519531 192.601562 6.25 199.511719 C 5.980469 206.394531 11.351562 212.230469 18.261719 212.5 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 187.988281 212.5 C 194.898438 212.230469 200.269531 206.394531 199.976562 199.511719 C 199.730469 192.601562 193.921875 187.230469 187.011719 187.5 C 180.101562 187.769531 174.730469 193.601562 175.023438 200.488281 C 175.269531 207.398438 181.078125 212.769531 187.988281 212.5 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ffffff"
                  d="M 212.5 156.25 C 212.5 142.429688 201.316406 131.25 187.5 131.25 C 173.679688 131.25 162.5 142.429688 162.5 156.25 L 162.5 168.75 L 212.5 168.75 L 212.5 156.25 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 168.75 56.25 L 156.25 56.25 L 156.25 68.75 L 168.75 68.75 L 168.75 56.25 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 331.25 218.75 L 331.25 206.25 L 318.75 206.25 L 318.75 218.75 L 331.25 218.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 206.25 318.75 L 218.75 318.75 L 218.75 306.25 L 206.25 306.25 L 206.25 318.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 156.25 337.5 L 168.75 337.5 L 168.75 325 L 156.25 325 L 156.25 337.5 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 56.25 181.25 L 56.25 193.75 L 68.75 193.75 L 68.75 181.25 L 56.25 181.25 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 206.25 68.75 L 218.75 68.75 L 218.75 56.25 L 206.25 56.25 L 206.25 68.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 318.75 168.75 L 318.75 156.25 L 306.25 156.25 L 306.25 168.75 L 318.75 168.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 287.5 106.25 L 287.5 93.75 L 275 93.75 L 275 106.25 L 287.5 106.25 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 100 93.75 L 87.5 93.75 L 87.5 106.25 L 100 106.25 L 100 93.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 275 281.25 L 287.5 281.25 L 287.5 268.75 L 275 268.75 L 275 281.25 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 100 268.75 L 87.5 268.75 L 87.5 281.25 L 100 281.25 L 100 268.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 193.75 199.753906 C 193.824219 201.414062 193.210938 203.027344 192.089844 204.246094 C 190.941406 205.46875 189.402344 206.175781 187.742188 206.25 C 186.058594 206.296875 184.496094 205.710938 183.25 204.589844 C 182.03125 203.464844 181.324219 201.902344 181.25 200.242188 C 181.175781 198.582031 181.785156 196.972656 182.910156 195.75 C 184.058594 194.53125 185.59375 193.824219 187.253906 193.75 C 187.328125 193.75 187.425781 193.75 187.5 193.75 C 189.085938 193.75 190.574219 194.335938 191.746094 195.410156 C 192.96875 196.53125 193.675781 198.09375 193.75 199.753906 Z M 186.765625 181.273438 C 181.761719 181.46875 177.125 183.59375 173.730469 187.28125 C 170.335938 190.941406 168.554688 195.726562 168.773438 200.730469 C 168.96875 205.738281 171.09375 210.375 174.78125 213.769531 C 176.683594 215.527344 178.882812 216.796875 181.25 217.652344 L 181.25 231.25 L 193.75 231.25 L 193.75 217.601562 C 196.582031 216.601562 199.167969 214.988281 201.269531 212.71875 C 204.664062 209.058594 206.445312 204.273438 206.226562 199.265625 C 206.03125 194.261719 203.90625 189.625 200.21875 186.230469 C 196.558594 182.835938 191.625 181.03125 186.765625 181.273438 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 218.75 231.25 C 218.75 234.691406 215.941406 237.5 212.5 237.5 L 162.5 237.5 C 159.058594 237.5 156.25 234.691406 156.25 231.25 L 156.25 181.25 C 156.25 177.808594 159.058594 175 162.5 175 L 212.5 175 C 215.941406 175 218.75 177.808594 218.75 181.25 Z M 168.75 156.25 C 168.75 145.898438 177.148438 137.5 187.5 137.5 C 197.851562 137.5 206.25 145.898438 206.25 156.25 L 206.25 162.5 L 168.75 162.5 Z M 218.75 163.648438 L 218.75 156.25 C 218.75 139.011719 204.734375 125 187.5 125 C 170.261719 125 156.25 139.011719 156.25 156.25 L 156.25 163.648438 C 149 166.234375 143.75 173.121094 143.75 181.25 L 143.75 231.25 C 143.75 241.601562 152.148438 250 162.5 250 L 212.5 250 C 222.851562 250 231.25 241.601562 231.25 231.25 L 231.25 181.25 C 231.25 173.121094 226 166.234375 218.75 163.648438 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
                <path
                  fill="#ff1616"
                  d="M 356.25 268.75 C 352.808594 268.75 350 265.941406 350 262.5 C 350 259.058594 352.808594 256.25 356.25 256.25 C 359.691406 256.25 362.5 259.058594 362.5 262.5 C 362.5 265.941406 359.691406 268.75 356.25 268.75 Z M 262.5 243.75 C 262.5 254.101562 254.101562 262.5 243.75 262.5 L 131.25 262.5 C 120.898438 262.5 112.5 254.101562 112.5 243.75 L 112.5 131.25 C 112.5 120.898438 120.898438 112.5 131.25 112.5 L 243.75 112.5 C 254.101562 112.5 262.5 120.898438 262.5 131.25 Z M 293.75 312.5 C 297.191406 312.5 300 315.308594 300 318.75 C 300 322.191406 297.191406 325 293.75 325 C 290.308594 325 287.5 322.191406 287.5 318.75 C 287.5 315.308594 290.308594 312.5 293.75 312.5 Z M 237.5 350 C 240.941406 350 243.75 352.808594 243.75 356.25 C 243.75 359.691406 240.941406 362.5 237.5 362.5 C 234.058594 362.5 231.25 359.691406 231.25 356.25 C 231.25 352.808594 234.058594 350 237.5 350 Z M 100 362.5 C 96.558594 362.5 93.75 359.691406 93.75 356.25 C 93.75 352.808594 96.558594 350 100 350 C 103.441406 350 106.25 352.808594 106.25 356.25 C 106.25 359.691406 103.441406 362.5 100 362.5 Z M 37.5 293.75 C 34.058594 293.75 31.25 290.941406 31.25 287.5 C 31.25 284.058594 34.058594 281.25 37.5 281.25 C 40.941406 281.25 43.75 284.058594 43.75 287.5 C 43.75 290.941406 40.941406 293.75 37.5 293.75 Z M 18.75 206.25 C 15.308594 206.25 12.5 203.441406 12.5 200 C 12.5 196.558594 15.308594 193.75 18.75 193.75 C 22.191406 193.75 25 196.558594 25 200 C 25 203.441406 22.191406 206.25 18.75 206.25 Z M 37.5 106.25 C 37.5 102.808594 40.308594 100 43.75 100 C 47.191406 100 50 102.808594 50 106.25 C 50 109.691406 47.191406 112.5 43.75 112.5 C 40.308594 112.5 37.5 109.691406 37.5 106.25 Z M 93.75 18.75 C 93.75 15.308594 96.558594 12.5 100 12.5 C 103.441406 12.5 106.25 15.308594 106.25 18.75 C 106.25 22.191406 103.441406 25 100 25 C 96.558594 25 93.75 22.191406 93.75 18.75 Z M 187.5 31.25 C 190.941406 31.25 193.75 34.058594 193.75 37.5 C 193.75 40.941406 190.941406 43.75 187.5 43.75 C 184.058594 43.75 181.25 40.941406 181.25 37.5 C 181.25 34.058594 184.058594 31.25 187.5 31.25 Z M 287.5 25 C 290.941406 25 293.75 27.808594 293.75 31.25 C 293.75 34.691406 290.941406 37.5 287.5 37.5 C 284.058594 37.5 281.25 34.691406 281.25 31.25 C 281.25 27.808594 284.058594 25 287.5 25 Z M 331.25 100 C 334.691406 100 337.5 102.808594 337.5 106.25 C 337.5 109.691406 334.691406 112.5 331.25 112.5 C 327.808594 112.5 325 109.691406 325 106.25 C 325 102.808594 327.808594 100 331.25 100 Z M 356.25 156.25 C 359.691406 156.25 362.5 159.058594 362.5 162.5 C 362.5 165.941406 359.691406 168.75 356.25 168.75 C 352.808594 168.75 350 165.941406 350 162.5 C 350 159.058594 352.808594 156.25 356.25 156.25 Z M 356.25 243.75 C 353.367188 243.75 350.660156 244.457031 348.21875 245.628906 L 333.835938 231.25 L 275 231.25 L 275 218.75 L 306.25 218.75 L 306.25 206.25 L 275 206.25 L 275 193.75 L 307.714844 193.75 L 343.261719 175.976562 C 346.65625 179.222656 351.21875 181.25 356.25 181.25 C 366.601562 181.25 375 172.851562 375 162.5 C 375 152.148438 366.601562 143.75 356.25 143.75 C 345.898438 143.75 337.5 152.148438 337.5 162.5 C 337.5 163.28125 337.644531 164.011719 337.71875 164.769531 L 304.785156 181.25 L 275 181.25 L 275 168.75 L 293.75 168.75 L 293.75 156.25 L 275 156.25 L 275 143.75 L 302.585938 143.75 L 323.21875 123.121094 C 325.660156 124.292969 328.367188 125 331.25 125 C 341.601562 125 350 116.601562 350 106.25 C 350 95.898438 341.601562 87.5 331.25 87.5 C 320.898438 87.5 312.5 95.898438 312.5 106.25 C 312.5 109.128906 313.207031 111.839844 314.378906 114.28125 L 297.410156 131.25 L 275 131.25 C 275 114.011719 260.984375 100 243.75 100 L 243.75 83.835938 L 279.46875 48.121094 C 281.910156 49.292969 284.617188 50 287.5 50 C 297.851562 50 306.25 41.601562 306.25 31.25 C 306.25 20.898438 297.851562 12.5 287.5 12.5 C 277.148438 12.5 268.75 20.898438 268.75 31.25 C 268.75 34.132812 269.457031 36.839844 270.628906 39.28125 L 231.25 78.660156 L 231.25 100 L 218.75 100 L 218.75 81.25 L 206.25 81.25 L 206.25 100 L 193.75 100 L 193.75 55.101562 C 201 52.515625 206.25 45.628906 206.25 37.5 C 206.25 27.148438 197.851562 18.75 187.5 18.75 C 177.148438 18.75 168.75 27.148438 168.75 37.5 C 168.75 45.628906 174 52.515625 181.25 55.101562 L 181.25 100 L 168.75 100 L 168.75 81.25 L 156.25 81.25 L 156.25 100 L 143.75 100 L 143.75 53.660156 L 116.871094 26.78125 C 118.042969 24.339844 118.75 21.632812 118.75 18.75 C 118.75 8.398438 110.351562 0 100 0 C 89.648438 0 81.25 8.398438 81.25 18.75 C 81.25 29.101562 89.648438 37.5 100 37.5 C 102.878906 37.5 105.589844 36.792969 108.03125 35.621094 L 131.25 58.835938 L 131.25 100 C 114.011719 100 100 114.011719 100 131.25 L 77.585938 131.25 L 60.621094 114.28125 C 61.792969 111.839844 62.5 109.128906 62.5 106.25 C 62.5 95.898438 54.101562 87.5 43.75 87.5 C 33.398438 87.5 25 95.898438 25 106.25 C 25 116.601562 33.398438 125 43.75 125 C 46.632812 125 49.339844 124.292969 51.78125 123.121094 L 72.410156 143.75 L 100 143.75 L 100 156.25 L 60.230469 156.25 L 27.515625 183.519531 C 24.878906 182.128906 21.921875 181.25 18.75 181.25 C 8.398438 181.25 0 189.648438 0 200 C 0 210.351562 8.398438 218.75 18.75 218.75 C 29.101562 218.75 37.5 210.351562 37.5 200 C 37.5 197.410156 36.988281 194.945312 36.011719 192.699219 L 64.769531 168.75 L 100 168.75 L 100 181.25 L 81.25 181.25 L 81.25 193.75 L 100 193.75 L 100 206.25 L 43.75 206.25 L 43.75 218.75 L 100 218.75 L 100 231.25 L 65.40625 231.25 L 40.234375 269.019531 C 39.332031 268.894531 38.429688 268.75 37.5 268.75 C 27.148438 268.75 18.75 277.148438 18.75 287.5 C 18.75 297.851562 27.148438 306.25 37.5 306.25 C 47.851562 306.25 56.25 297.851562 56.25 287.5 C 56.25 282.640625 54.34375 278.269531 51.320312 274.925781 L 72.09375 243.75 L 100 243.75 C 100 260.984375 114.011719 275 131.25 275 L 131.25 316.160156 L 108.03125 339.378906 C 105.589844 338.207031 102.878906 337.5 100 337.5 C 89.648438 337.5 81.25 345.898438 81.25 356.25 C 81.25 366.601562 89.648438 375 100 375 C 110.351562 375 118.75 366.601562 118.75 356.25 C 118.75 353.367188 118.042969 350.660156 116.871094 348.21875 L 143.75 321.335938 L 143.75 275 L 156.25 275 L 156.25 312.5 L 168.75 312.5 L 168.75 275 L 181.25 275 L 181.25 328.464844 L 219.214844 352.195312 C 218.921875 353.515625 218.75 354.859375 218.75 356.25 C 218.75 366.601562 227.148438 375 237.5 375 C 247.851562 375 256.25 366.601562 256.25 356.25 C 256.25 345.898438 247.851562 337.5 237.5 337.5 C 233.082031 337.5 229.101562 339.085938 225.902344 341.648438 L 193.75 321.53125 L 193.75 275 L 206.25 275 L 206.25 293.75 L 218.75 293.75 L 218.75 275 L 231.25 275 L 231.25 325 L 276.148438 325 C 278.734375 332.25 285.621094 337.5 293.75 337.5 C 304.101562 337.5 312.5 329.101562 312.5 318.75 C 312.5 308.398438 304.101562 300 293.75 300 C 285.621094 300 278.734375 305.25 276.148438 312.5 L 243.75 312.5 L 243.75 275 C 260.984375 275 275 260.984375 275 243.75 L 328.660156 243.75 L 339.378906 254.46875 C 338.207031 256.910156 337.5 259.617188 337.5 262.5 C 337.5 272.851562 345.898438 281.25 356.25 281.25 C 366.601562 281.25 375 272.851562 375 262.5 C 375 252.148438 366.601562 243.75 356.25 243.75 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>

          <div class="col-md-7 aboutText">
            <div class="colContent">
              <h2 class="Quote mb-5">
                Rise with <span>Security</span> / Rise from the Fire of
                <span> Cyber Crimes</span>
              </h2>
              <p class="">
                At Cyphinix, we are here to help you and your business rise
                fearlessly like Phoenix from the fire of cybercrimes and
                threats. The increase in the number of
                <strong> Small And Midsize Business (SMBs) </strong>
                coming online has directly increased the probability of SMBs
                getting targeted by cybercriminals and hackers. Therefore, With
                our customizable and affordable services, our
                dedicated(/experienced) team and solutions(/protection) will
                tackle all the cyber hurdles for the smooth conduct of your
                business.
              </p>

              <h2 class="Quote mt-5 mb-5">
                <span>Secure yourself and your company today!</span>
              </h2>

              <button class="btn homeBtn mt-3">
                <a href="/contact" class="homeBtnLink">
                  Contact Us
                </a>
              </button>
              <button class="btn homeBtn mt-3 ms-2">
                <a href="/services" class="homeBtnLink">
                  View All Services
                </a>
              </button>

              <form action="" method="post">
                <h3 class="Quote mt-5">
                Stay up to date on the latest threats and trends related to cyber security!
                </h3>
              </form>

              <div class="input-group input-group-lg mt-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary submitNLBtn"
                  type="button"
                  id="button-addon2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="fullPage">
          <div class="col-md-6">
            <div class="text-center w-full mx-auto">
              <span class="text-hollow text-transparent">OUR SERVICES</span>
            </div>
          </div>

          <div class="services-grid">
            <div class="service service1">
              <i class="ti-bar-chart"></i>
              <h4>Application Security Assessment</h4>

              <a href="/application-security-assessment" class="cta">
                Read More <span class="ti-angle-right" />
              </a>
            </div>

            <div class="service service1">
              <i class="ti-light-bulb"></i>
              <h4>Blue Teaming Solutions</h4>

              <a href="/blue-teaming-solutions" class="cta">
                Read More <span class="ti-angle-right" />
              </a>
            </div>

            <div class="service service1">
              <i class="ti-money"></i>
              <h4>IOT Security Assessment</h4>

              <a href="/iot-security-assessment" class="cta">
                Read more <span class="ti-angle-right" />
              </a>
            </div>
          </div>
          <div class="services-grid">
            <div class="service service1">
              <i class="ti-bar-chart"></i>
              <h4>Network Security Assessment</h4>

              <a href="/network-security-assessment" class="cta">
                Read More <span class="ti-angle-right" />
              </a>
            </div>

            <div class="service service1">
              <i class="ti-light-bulb"></i>
              <h4>Adversery Simulation</h4>

              <a href="/adversery-simulation" class="cta">
                Read More <span class="ti-angle-right" />
              </a>
            </div>

            <div class="service service1">
              <i class="ti-money"></i>
              <h4>Security Training and Awareness</h4>

              <a href="/security-training-and-awareness" class="cta">
                Read more <span class="ti-angle-right" />
              </a>
            </div>
          </div>
          <div class="services-grid">
            <div class="service service1">
              <i class="ti-bar-chart"></i>
              <h4>Other Security Services</h4>

              <a href="/other-security Services" class="cta">
                Read More <span class="ti-angle-right" />
              </a>
            </div>
          </div>
        </div>

        <div class="fullPage">
          <div class="Achievements">
            <div class="highlightText">
              <h1>Don't worry!</h1>
              <h2>Our Ace values are for your ease</h2>
            </div>

            <div class="mt-5 ms-auto me-auto">
              <div class="Testimonials Quality row justify-content-around">
                <div class="col-md-4 p-0 mt-3">
                  <div class="card border-0">
                    <div class="card-body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        fill="currentColor"
                        class="bi bi-check2-circle mb-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                      </svg>
                      <h5 class="card-title mb-3">Accuracy</h5>
                      <p class="card-text">
                        Doing the right thing at the right dose right. We are
                        here to safeguard you from the fire of the exact
                        probable cyber hurdle in your way.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 p-0 mt-3">
                  <div class="card">
                    <div class="card-body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        fill="currentColor"
                        class="bi bi-puzzle mb-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .039-.063v-.009a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003a.214.214 0 0 0-.039-.064.859.859 0 0 0-.27-.193C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.039.063v.003l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855zM4.605 3a.5.5 0 0 0-.498.55l.001.007.29 3.4A.5.5 0 0 1 3.9 7.5h-.782c-.696 0-1.182-.497-1.469-.872a.459.459 0 0 0-.118-.115.112.112 0 0 0-.025-.012L1.5 6.5h-.003a.213.213 0 0 0-.064.039.86.86 0 0 0-.193.27C1.1 7.09 1 7.51 1 8c0 .491.1.912.24 1.19.07.14.14.225.194.271a.213.213 0 0 0 .063.039H1.5l.006-.001a.112.112 0 0 0 .025-.012.459.459 0 0 0 .118-.115c.287-.375.773-.872 1.469-.872H3.9a.5.5 0 0 1 .498.542l-.29 3.408a.5.5 0 0 0 .497.55h1.878c-.048-.166-.195-.352-.463-.557-.274-.21-.52-.528-.52-.943 0-.568.447-.947.862-1.154C6.807 10.123 7.387 10 8 10s1.193.123 1.638.346c.415.207.862.586.862 1.154 0 .415-.246.733-.52.943-.268.205-.415.39-.463.557h1.878a.5.5 0 0 0 .498-.55l-.001-.007-.29-3.4A.5.5 0 0 1 12.1 8.5h.782c.696 0 1.182.497 1.469.872.05.065.091.099.118.115.013.008.021.01.025.012a.02.02 0 0 0 .006.001h.003a.214.214 0 0 0 .064-.039.86.86 0 0 0 .193-.27c.14-.28.24-.7.24-1.191 0-.492-.1-.912-.24-1.19a.86.86 0 0 0-.194-.271.215.215 0 0 0-.063-.039H14.5l-.006.001a.113.113 0 0 0-.025.012.459.459 0 0 0-.118.115c-.287.375-.773.872-1.469.872H12.1a.5.5 0 0 1-.498-.543l.29-3.407a.5.5 0 0 0-.497-.55H9.517c.048.166.195.352.463.557.274.21.52.528.52.943 0 .568-.447.947-.862 1.154C9.193 5.877 8.613 6 8 6s-1.193-.123-1.638-.346C5.947 5.447 5.5 5.068 5.5 4.5c0-.415.246-.733.52-.943.268-.205.415-.39.463-.557H4.605z" />
                      </svg>
                      <h5 class="card-title mb-3">Effectiveness</h5>
                      <p class="card-text">
                        With our solutions and services, we will track the risks
                        effectively and mitigate those efficiently.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 p-0 mt-3">
                  <div class="card">
                    <div class="card-body">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        fill="currentColor"
                        class="bi bi-hand-thumbs-up mb-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                      </svg>
                      <h5 class="card-title mb-3">Confidentiality</h5>
                      <p class="card-text">
                        Confidentiality is the base of cybersecurity. At
                        Cyphinix, we take the responsibility to protect your
                        confidential information from unauthorized use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="joinUs row ms-auto me-auto">
            <div class="col-md-8 mt-4 mt-auto mb-auto">
              <h1>Don't Late, Join us today</h1>
              <p>Find out what cyber security service your company needs.</p>
            </div>
            <div class="col-md-4 mt-4 m-auto">
              <h1>
                <a class="btn contactBtn" href="/services">
                  Services
                </a>
              </h1>
              <h1>
                <a class="btn contactBtn" href="/contact">
                  Contact us
                </a>
              </h1>
            </div>
          </div>
        </div>

        <div class="fullPage">
          <div class="col-md-6">
            <div class="text-center w-full mx-auto">
              <span class="text-hollow text-transparent">TESTIMONIALS</span>
            </div>
          </div>
          <div class="mt-3 ms-5 col-md-8">
            <p class="fs-4">
              Serving our clients, is our foremost task! We can help you adapt
              and rise today, and satisfying all your business' technical needs.
            </p>
            <p class="fs-4">See what our other clients say about us</p>
          </div>

          <div class="Testimonials row">
            <div class="col-md-4">
              <div class="card Testimonial">
                <div class="card-body text-black">
                  <p class="card-text">
                    Cyphinix experts are well-experienced in great cyber
                    security practices and methodologies. They provided an
                    extensive range of services, which included everything from
                    strategic planning to assessment, implementation, and
                    support for securing our business effectively.
                  </p>
                </div>

                <div class="CiteName">
                  <p class="mb-4">~ Anshul Katyal</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card Testimonial">
                <div class="card-body text-black">
                  <p class="card-text">
                    Cyphinix provided us with a full range of cyber security
                    services. We have been/are impressed with their tools and
                    talent, and their ability to be flexible and adapt to our
                    changing needs. They are very customer service-oriented and
                    always strive to ensure our satisfaction. We highly
                    recommend them for any data security need.
                  </p>
                </div>

                <div class="CiteName">
                  <p class="mb-4">~ Simran Kaur</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card Testimonial">
                <div class="card-body text-black">
                  <p class="card-text">
                    Cyphinix team is extremely responsive and effective. They
                    were able to resolve our issues which we brought to them
                    within 24 hours.
                  </p>
                </div>

                <div class="CiteName">
                  <p class="mb-4">~ Jaspreet Singh</p>
                </div>
              </div>
            </div>
          </div>

          <div class="testQuote">
            <h1>BE SECURE, PROVIDE SECURE</h1>
          </div>
        </div>

        <div class="fullPage">
          <div class="col-md-6 mb-5">
            <div class="text-center w-full mx-auto">
              <span class="text-hollow text-transparent">TOP BLOGS</span>
            </div>
          </div>

          <div class="Blogs">
            <div class="row">
              <div class="col-md-6 blogCol">
                <div class="card cardMain">
                  <div class="cardImg"></div>
                  <div class="card-body">
                    <h5 class="card-title">How Hackers can jam cell phone signals?</h5>
                    <p class="card-text">
                      Mobile phones are used for a variety of purposes, such as
                      keeping in touch with family members, for conducting
                      business, and in order to have access to a telephone in
                      the event of an emergency. Some people carry more than one
                      mobile phone for different purposes, such as for business
                      and personal use...
                    </p>

                    <a
                      href="/blogs-how-hackers-can-jam-cell-phone-signals"
                      class="cardLink"
                    >
                      Read More
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 blogCol">
                <div class="card cardSec">
                  <div class="card-body">
                    <h5 class="card-title">Blog Title</h5>
                    <p class="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Doloribus cumque esse ut dicta omnis quidem reprehenderit
                      laboriosam iusto praesentium perferendis voluptatibus
                      aliquid molestiae cupiditate repudiandae quod, dolorum
                      voluptates mollitia repellat!
                    </p>

                    <a href="#" class="cardLink">
                      Read More
                      <span></span>
                    </a>
                  </div>
                </div>
                <div class="card cardSec">
                  <div class="card-body">
                    <h5 class="card-title">Blog Title</h5>
                    <p class="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Doloribus cumque esse ut dicta omnis quidem reprehenderit
                      laboriosam iusto praesentium perferendis voluptatibus
                      aliquid molestiae cupiditate repudiandae quod, dolorum
                      voluptates mollitia repellat!
                    </p>

                    <a href="#" class="cardLink">
                      Read More
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testQuote">
          <h1>Rise like Phoenix with the Cyphinix’s security!</h1>
          <h1 class="mt-5"><img src={redlogo} height="150px"></img></h1>
          <h2 class="text-black fw-bold fs-1">Cyphinix</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
