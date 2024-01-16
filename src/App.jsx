import { useState } from "react";
import QRCode from "react-qr-code";
import bg from "./assets/bp.jpeg";
import logo from "./assets/logo.png";
import party from "./assets/party4.jpeg";

const data = [
  {
    h: "Tax (10% ): ",
    t: "2 USD",
  },
  {
    h: "Early Bird Discount:",
    t: " 0 USD",
  },
  {
    h: "Total Paid:",
    t: "0 USD",
  },
  {
    h: "Payment Method:",
    t: "Flutterwave",
  },
  {
    h: "Payment Status:",
    t: "Completed",
  },
];

const styles = {
  background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.84) 59%, rgba(0, 0, 0, 0.84) 100%),
        url('${bg}') no-repeat`,
};

function App() {
  const [url, seturl] = useState("");

  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-6">
      <div className=" w-fit generate_party">
        <div
          className="  flex  justify-center items-center px-[5.06rem] py-[4rem]"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.84) 0%, rgba(0, 0, 0, 0.84) 59%, rgba(0, 0, 0, 0.84) 100%),
      url('${bg}') no-repeat`,
          }}
        >
          <div
            className="max-w-[26.75rem] w-full h-[37rem] flex flex-col rounded-[0.625rem]"
            style={{
              background:
                "linear-gradient(233deg, #1764E8 13.36%, #2E7096 98.94%)",
            }}
          >
            {/** first */}

            <div className="relative overflow-hidden pb-[2.2rem]">
              <div className="">
                <img
                  src={party}
                  alt=""
                  className="w-[26.75rem] h-[9.4375rem] rounded-t-[0.625rem] object-cover"
                />

                <div className="flex flex-col justify-center text-white px-[1.56rem] py-[1.1rem]">
                  <h1 className="text-[1.5625rem] ">Booking Details</h1>

                  <PartyDetails
                    Heading="Event Name:"
                    text="JTM Party"
                    className=" my-[.69rem]"
                  />

                  <div className="flex flex-col gap-[.37rem]">
                    <div className="flex justify-between gap-3">
                      <PartyDetails
                        Heading="Booking Date:"
                        text="Nov 21, 2023"
                      />
                      <PartyDetails Heading="Booking ID:" text="123FAA5AFZ" />
                    </div>

                    <div className="flex justify-between gap-3">
                      <PartyDetails
                        Heading="Event Start Date:"
                        text="Nov 21, 2023"
                      />
                      <PartyDetails Heading="Quantity:" text="1" />
                    </div>

                    <div className="flex justify-between gap-3">
                      <PartyDetails
                        Heading="Booking Date:"
                        text="Nov 21, 2023"
                      />
                      <PartyDetails Heading="Duration:" text="1hr" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="absolute w-[40px] h-[40px] rounded-[100%] bg-white bottom-[-20px] left-[-20px]"
                style={styles}
              ></div>
              <div
                class="absolute w-[40px] h-[40px] rounded-[100%] bg-white bottom-[-20px] right-[-20px]"
                style={styles}
              ></div>
              <div className="w-[90.2%] border border-dashed border-white absolute mx-[4.59%] bottom-[-1px] z-10"></div>
            </div>

            {/** sec */}

            <div className="    relative overflow-hidden pt-[2.2rem]">
              <div
                class="absolute w-[40px] h-[40px] rounded-[100%]  top-[-20px] left-[-20px]"
                style={styles}
              ></div>
              <div
                class="absolute w-[40px] h-[40px] rounded-[100%] bg-white top-[-20px] right-[-20px]"
                style={styles}
              ></div>

              <div className="px-[1.56rem] flex justify-between items-center">
                <div className="bg-white p-[.7rem]">
                  <QRCode
                    fgColor="#040720"
                    bgColor="white"
                    style={{ height: "auto", maxWidth: "100%", width: "8rem" }}
                    className="qr_code"
                    value={url}
                  />
                </div>

                <div className="text-white">
                  {data?.map((item, i) => (
                    <PartyDetails
                      Heading={item.h}
                      text={item.t}
                      className={i !== 0 ? "mt-[.37rem]" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[2rem] pb-[1.5rem] pl-[2.69rem] pr-[2.12rem] bg-white flex justify-between items-center">
          <div className="">
            <h1 className="text-[1.5625rem] text-[#252525] mb-[1rem]">
              Billing Details
            </h1>

            <PartyDetails Heading="Name:" text=" Jhon Doe" />
            <PartyDetails
              Heading="Email:"
              text=" Jhondoe@gmail.com"
              className="mt-[.37rem]"
            />
            <PartyDetails
              Heading="Contact Number:"
              text=" 1234567890"
              className="mt-[.37rem]"
            />
          </div>

          <img src={logo} alt="" className="w-[6.75rem] h-[6.75rem]" />
        </div>
      </div>
    </div>
  );
}

export default App;

const PartyDetails = ({
  Heading = "Event Name:",
  text = "JTM Party",
  className = "",
}) => {
  return (
    <p className={`text-[0.825rem] ${className}`}>
      <span className=" font-semibold ">{Heading}</span> {text}
    </p>
  );
};
