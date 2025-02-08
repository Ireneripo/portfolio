function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-5 bg-black text-white text-center"
    >
      <h2 className="text-3xl font-bold">EXPERIENCE</h2>

      <div className="mt-5 max-w-3xl mx-auto flex flex-col items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/images/nottle-logo.png"
            alt="WebHR Logo"
            className="h-10 w-10"
          />
          <h3 className="text-xl font-semibold">Nottle / DevOps</h3>
        </div>

        <p className="text-gray-400 mt-2">Jan 2022 - PRESENT, Lyon (remote)</p>
        <p className="mt-2 text-justify">
          Application deployment in AWS with Terraform and Terraspace. Container
          management with Docker. Mastery of numerous AWS services. CI/CD
          implementation. Creation and management of company website.
        </p>
      </div>
      <div className="mt-5 max-w-3xl mx-auto flex flex-col items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/images/ovh-logo.svg"
            alt="WebHR Logo"
            className="h-10 w-10"
          />
          <h3 className="text-xl font-semibold">OVHCloud / Office Manager</h3>
        </div>

        <p className="text-gray-400 mt-2">Mar 2017 - Jul 2020, Lyon</p>
        <p className="mt-2 text-justify">
          Served as the primary liaison between the head office and the Lyon
          branch. Managed office operations, including procurement of supplies
          and coordination with suppliers and service providers. Oversaw medical
          visits, sick leave administration, and luncheon vouchers while
          organizing company events. Facilitated candidate reception and
          onboarding of new employees, ensuring a high-quality local experience
          and work environment. Contributed to company-school relations to
          attract top talent. Supervised the management of a coworking space.
        </p>
      </div>
    </section>
  );
}

export default ExperienceSection;
