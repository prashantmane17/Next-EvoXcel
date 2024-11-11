import {
  BarChart3,
  Clock,
  MapPin,
  Users,
  Brain,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function RemoteWork() {
  return (
    <div className="w-full p-4 md:p-14 ">
      <h2 className="text-center text-[30px] md:text-[40px] font-bold">
        Revolutionize Your Remote Workforce
      </h2>
      {/* Analytics Dashboard Section */}
      <section className="w-full py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mt-2">
                  Geo-Spatial Tracking
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Monitor Remote Teams:
                    </h4>
                    <p className="text-gray-600">
                      Track remote employees' locations and statuses with high
                      accuracy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Facial Attendance:
                    </h4>
                    <p className="text-gray-600">
                      Ensure precise time tracking, reducing errors and
                      preventing fraud.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Location History:
                    </h4>
                    <p className="text-gray-600">
                      Maintain a detailed record of staff movements and
                      locations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Digital Onboarding:
                    </h4>
                    <p className="text-gray-600">
                      Streamline the onboarding process for new hires with
                      efficient digital solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Capacity Forecasting
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Performance Analytics
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden  ">
                <Image
                  src="/images/hr-management/tracking.svg"
                  alt="Analytics Dashboard"
                  width={500}
                  height={400}
                  className=""
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Task and Time Management */}
      <section className="w-full py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden  ">
                <Image
                  src="/images/hr-management/time-management.svg"
                  alt="Analytics Dashboard"
                  width={500}
                  height={400}
                  className=""
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-4xl font-bold mt-2">
                  Task and Time Management
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Task Tracking:
                    </h4>
                    <p className="text-gray-600">
                      Gain real-time insights into task progress and employee
                      performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Auto Scheduling:
                    </h4>
                    <p className="text-gray-600">
                      Use AI algorithms to create optimal schedules tailored to
                      your workforce’s needs
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Shift & Roster Automation:
                    </h4>
                    <p className="text-gray-600">
                      Automatically generate rosters based on set rules and
                      employee preferences, improving operational efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Payroll Automation:
                    </h4>
                    <p className="text-gray-600">
                      Simplify payslip generation with mobile accessibility,
                      ensuring accurate and timely payroll management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Capacity Forecasting
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Performance Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Insights */}
      <section className="w-full py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mt-2">
                  Data-Driven Insights:
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Performance Analytics
                    </h4>
                    <p className="text-gray-600">
                      Access real-time metrics for individuals and teams,
                      driving data-informed decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Resource Analytics:
                    </h4>
                    <p className="text-gray-600">
                      Analyze data on resource utilization to optimize personnel
                      use and improve productivity
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Capacity Forecasting:
                    </h4>
                    <p className="text-gray-600">
                      Predict future resource needs with advanced forecasting
                      tools to ensure optimal staffing levels.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Threat Detection:
                    </h4>
                    <p className="text-gray-600">
                      Utilize AI to identify anomalies and potential issues in
                      operational data, enhancing security and operational
                      integrity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Capacity Forecasting
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Performance Analytics
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden  ">
                <Image
                  src="/images/hr-management/insights.svg"
                  alt="Analytics Dashboard"
                  width={500}
                  height={400}
                  className=" "
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>
      {/* Empower Your Sales Team */}
      <section className="w-full py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden  ">
                <Image
                  src="/images/hr-management/salesImage.svg"
                  alt="Analytics Dashboard"
                  width={500}
                  height={400}
                  className=" "
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-4xl font-bold mt-2">
                  Empower Your Sales Team
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      AI Knowledge Bot:
                    </h4>
                    <p className="text-gray-600">
                      Enhance customer satisfaction with instant responses via
                      our AI-powered chatbot.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Sales Analytics:
                    </h4>
                    <p className="text-gray-600">
                      Access detailed reports on conversion rates, sales cycles,
                      and revenue trends to drive strategic decisions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Expense Management:
                    </h4>
                    <p className="text-gray-600">
                      Track and categorize sales expenses with real-time budget
                      updates, ensuring financial control.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Lead Management:
                    </h4>
                    <p className="text-gray-600">
                      Oversee leads throughout the sales funnel, ensuring proper
                      prioritization and allocation for optimal conversion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Capacity Forecasting
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Performance Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upskill Your Workforce */}
      <section className="w-full py-14  bg-white ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mt-2">
                  Upskill Your Workforce
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      AI-Enabled Course Recommendations:
                    </h4>
                    <p className="text-gray-600">
                      Receive personalized training module suggestions through
                      our mobile platform to enhance skills and knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Competency Mapping:
                    </h4>
                    <p className="text-gray-600">
                      Identify strengths and areas for improvement in employee
                      skills, supporting targeted development.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Mobile-Based Training:
                    </h4>
                    <p className="text-gray-600">
                      Provide interactive training accessible via mobile
                      devices, facilitating learning on-the-go.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-500">
                      Automatic Assessments:
                    </h4>
                    <p className="text-gray-600">
                      Evaluate employee progress and skill acquisition with
                      automated assessments for continuous improvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Capacity Forecasting
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-sm font-medium text-blue-600">
                  Performance Analytics
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden  ">
                <Image
                  src="/images/hr-management/workplace.svg"
                  alt="Analytics Dashboard"
                  width={500}
                  height={400}
                  className=" "
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
