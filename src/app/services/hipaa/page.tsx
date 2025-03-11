'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MagnetizeButton } from '@/components/MagnetButton';

const HIPAAPage = () => {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))]">
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-primary-900 text-center mb-8">
            HIPAA Compliance Solutions
          </h1>
          
          <p className="mt-4 text-xl text-primary-600">
            At Jaxcoder LLC, we understand the critical importance of HIPAA compliance for healthcare organizations.
            We provide specialized solutions to ensure your technology infrastructure meets all regulatory requirements.
          </p>
          
          <div className="my-10 flex justify-center">
            <Image
              src="/images/hipaa.gif"
              alt="HIPAA Privacy & Compliance"
              width={600}
              height={600}
              className="rounded-lg shadow-md border border-primary-200"
              priority
            />
          </div>
          
          <div className="prose prose-lg max-w-none text-primary-700">
            <h2 className="text-2xl font-bold text-primary-900 mt-8">
              What is HIPAA?
            </h2>
            <p>
              The Health Insurance Portability and Accountability Act (HIPAA) is a federal law that required the creation of national standards to protect sensitive patient health information from being disclosed without the patient's consent or knowledge.
            </p>
            
            <h2 className="text-2xl font-bold text-primary-900 mt-8">
              Why HIPAA Compliance Matters
            </h2>
            <p>
              HIPAA compliance is not just about avoiding penalties and fines – it's about protecting patient confidentiality and maintaining trust. Healthcare organizations that fail to comply may face:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Civil and criminal penalties up to $1.5 million per violation category per year</li>
              <li>Damage to reputation and loss of patient trust</li>
              <li>Potential lawsuits from affected individuals</li>
              <li>Corrective action plans mandated by HHS</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-primary-900 mt-8">
              Our HIPAA Compliance Services
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Risk Analysis and Management:</strong> Comprehensive assessment of potential risks and vulnerabilities to PHI</li>
              <li><strong>HIPAA-Compliant Software Development:</strong> Custom applications that incorporate privacy and security by design</li>
              <li><strong>Security Implementations:</strong> Technical safeguards including encryption, access controls, and audit trails</li>
              <li><strong>Staff Training Programs:</strong> Educating your team on HIPAA requirements and best practices</li>
              <li><strong>Policy Development:</strong> Creating customized policies and procedures to ensure ongoing compliance</li>
              <li><strong>Breach Response Planning:</strong> Developing protocols for identifying and responding to potential breaches</li>
              <li><strong>Compliance Monitoring:</strong> Ongoing assessment to ensure continued adherence to HIPAA regulations</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-primary-900 mt-8">
              How We Ensure Compliance
            </h2>
            <p>
              Our approach combines technical expertise with a deep understanding of healthcare regulations.
              We follow a systematic process:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Assessment:</strong> Thorough evaluation of your current systems and practices</li>
              <li><strong>Gap Analysis:</strong> Identification of areas that need improvement</li>
              <li><strong>Implementation:</strong> Deployment of necessary technical and administrative safeguards</li>
              <li><strong>Documentation:</strong> Development of required policies and procedures</li>
              <li><strong>Training:</strong> Education for all staff members on compliance requirements</li>
              <li><strong>Monitoring:</strong> Ongoing checks to ensure continued compliance</li>
            </ol>
            
            <h2 className="text-2xl font-bold text-primary-900 mt-8">
              Industries We Serve
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hospitals and Healthcare Systems</li>
              <li>Medical Practices and Clinics</li>
              <li>Dental Practices</li>
              <li>Mental Health Providers</li>
              <li>Healthcare Technology Companies</li>
              <li>Health Insurance Providers</li>
              <li>Pharmacies</li>
              <li>Long-term Care Facilities</li>
              <li>Telehealth Providers</li>
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact">
              <MagnetizeButton particleCount={20} attractRadius={150}>
                Contact Us About HIPAA Compliance
              </MagnetizeButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HIPAAPage; 