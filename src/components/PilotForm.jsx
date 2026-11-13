import { useState } from 'react';
import { 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';
import { pilotFormData } from '../data/content';

export default function PilotForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    organizationType: '',
    role: '',
    country: 'Nigeria',
    scale: '',
    challenge: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid work email address.';
    }
    if (!formData.organization.trim()) errs.organization = 'Organization name is required.';
    if (!formData.organizationType) errs.organizationType = 'Please select your organization type.';
    if (!formData.role.trim()) errs.role = 'Role / Position is required.';
    if (!formData.country.trim()) errs.country = 'Operating region is required.';
    if (!formData.scale) errs.scale = 'Please specify approximate infrastructure scale.';
    if (!formData.challenge.trim()) {
      errs.challenge = 'Please summarize your infrastructure challenge.';
    } else if (formData.challenge.trim().length < 15) {
      errs.challenge = 'Please provide at least 15 characters of detail.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `AQ-PILOT-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmissionId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      try {
        const stored = JSON.parse(localStorage.getItem('aquora_pilot_submissions') || '[]');
        stored.push({ ...formData, id: generatedId, timestamp: new Date().toISOString() });
        localStorage.setItem('aquora_pilot_submissions', JSON.stringify(stored));
      } catch {
        // storage fallback
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      organization: '',
      organizationType: '',
      role: '',
      country: 'Nigeria',
      scale: '',
      challenge: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="pilot-access" className="relative w-full max-w-full py-24 sm:py-32 bg-[#F8FAFC] border-t border-sky-100 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[800px] h-[500px] bg-gradient-to-r from-sky-200/30 via-blue-200/20 to-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-mono tracking-widest text-[#0369A1] uppercase mb-4 shadow-sm font-semibold">
            <span>{pilotFormData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
            {pilotFormData.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            {pilotFormData.description}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-sky-200/90 p-5 sm:p-10 shadow-2xl relative w-full max-w-full">
          {isSubmitted ? (
            /* Confirmation Success State */
            <div className="text-center py-10 sm:py-16 space-y-6 animate-fade-in w-full">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-[#0D9488] flex items-center justify-center mx-auto border border-teal-200 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-semibold">
                  Submission ID: {submissionId}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-['Manrope']">
                  Thank You for Your Interest in Aquora
                </h3>
                <p className="text-base text-[#475569] max-w-lg mx-auto leading-relaxed">
                  Your submission has been received. We'll be in touch to explore how we can work together to bring intelligence to your water infrastructure.
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-sky-50/70 border border-sky-200 text-left text-xs space-y-1.5 text-[#475569] w-full">
                <div className="flex justify-between">
                  <span>Organization:</span>
                  <span className="text-[#0F172A] font-semibold">{formData.organization}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contact:</span>
                  <span className="text-[#0F172A] font-semibold">{formData.workEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span>Operating Region:</span>
                  <span className="text-[#0F172A] font-semibold">{formData.country}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-semibold text-[#0369A1] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            /* Active Application Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full">
                {/* Full Name */}
                <div className="w-full">
                  <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                    Full Name <span className="text-[#0284C7]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ibrahim Alabi"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-sky-200'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Work Email */}
                <div className="w-full">
                  <label htmlFor="workEmail" className="block text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                    Work Email <span className="text-[#0284C7]">*</span>
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="name@wateragency.org"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-colors ${
                      errors.workEmail ? 'border-rose-500' : 'border-sky-200'
                    }`}
                  />
                  {errors.workEmail && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.workEmail}
                    </p>
                  )}
                </div>

                {/* Organization */}
                <div className="w-full">
                  <label htmlFor="organization" className="block text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                    Organization <span className="text-[#0284C7]">*</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Lagos State Water Corporation / Beta Mills"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-colors ${
                      errors.organization ? 'border-rose-500' : 'border-sky-200'
                    }`}
                  />
                  {errors.organization && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.organization}
                    </p>
                  )}
                </div>

                {/* Organization Type */}
                <div className="w-full">
                  <label htmlFor="organizationType" className="block text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                    Organization Type <span className="text-[#0284C7]">*</span>
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-sm text-[#0F172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-colors ${
                      errors.organizationType ? 'border-rose-500' : 'border-sky-200'
                    }`}
                  >
                    <option value="">Select organization classification</option>
                    {pilotFormData.organizationTypes.map((type) => (
                      <option key={type} value={type} className="bg-white text-[#0F172A]">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.organizationType && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.organizationType}
                    </p>
                  )}
                </div>

                {/* Role / Position */}
                <div className="w-full">
                  <label htmlFor="role" className="block text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                    Role / Position <span className="text-[#0284C7]">*</span>
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g. Chief Operations Officer / Distribution Engineer"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-colors ${
                      errors.role ? 'border-rose-500' : 'border-sky-200'
                    }`}
                  />
                  {errors.role && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.role}
                    </p>
                  )}
                </div>

                {/* Country or Operating Region */}
                <div className="w-full">
                  <label htmlFor="country" className="block text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                    Country or Operating Region <span className="text-[#0284C7]">*</span>
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Nigeria (or West Africa / Global)"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-colors ${
                      errors.country ? 'border-rose-500' : 'border-sky-200'
                    }`}
                  />
                  {errors.country && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>

              {/* Approximate Infrastructure Scale */}
              <div className="w-full">
                <label htmlFor="scale" className="block text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                  Approximate Infrastructure Scale <span className="text-[#0284C7]">*</span>
                </label>
                <select
                  id="scale"
                  name="scale"
                  value={formData.scale}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-sm text-[#0F172A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-colors ${
                    errors.scale ? 'border-rose-500' : 'border-sky-200'
                  }`}
                >
                  <option value="">Select network length / asset scale</option>
                  {pilotFormData.scaleOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-[#0F172A]">
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.scale && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.scale}
                  </p>
                )}
              </div>

              {/* Infrastructure Challenge */}
              <div className="w-full">
                <label htmlFor="challenge" className="block text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2">
                  What water infrastructure challenge are you trying to solve? <span className="text-[#0284C7]">*</span>
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="e.g. Unaccounted-for water loss in distribution zone 3, pressure surges causing recurrent pipe bursts, lack of visibility into pump run-hours..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7] transition-colors ${
                    errors.challenge ? 'border-rose-500' : 'border-sky-200'
                  }`}
                />
                {errors.challenge && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.challenge}
                  </p>
                )}
              </div>

              {/* Submit Button & Subtext */}
              <div className="pt-2 space-y-4 w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0D9488] hover:opacity-95 shadow-xl shadow-[#0284C7]/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing Application...</span>
                    </span>
                  ) : (
                    <>
                      <span>Apply for the Pilot Programme</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#64748B]">
                  Our team will review your submission and contact you to explore potential collaboration opportunities.
                </p>
              </div>

              {/* Privacy Notice Card */}
              <div className="mt-6 pt-4 border-t border-sky-100 flex items-start gap-3 bg-sky-50/70 p-3.5 sm:p-4 rounded-xl border border-sky-200 w-full">
                <Lock className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#475569] leading-relaxed">
                  <strong className="text-[#0F172A]">Privacy & Infrastructure Security:</strong> {pilotFormData.privacyNotice}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
