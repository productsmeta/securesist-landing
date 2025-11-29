"use client";

import { use } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";

// This would normally come from a CMS or API
const getBlogPost = (slug: string) => {
  const posts: Record<string, any> = {
    "meta-techs-launches-securesist": {
      slug: "meta-techs-launches-securesist",
      title: "Meta Techs Launches SECURESIST to Reduce Human Risk",
      excerpt: "A people-first cybersecurity awareness platform built to turn employees into active defenders.",
      date: "2025-02-10",
      readTime: "5 min read",
      author: "Meta Techs Team",
      authorRole: "Product Team",
      category: "Announcement",
      image: "/contact_us.jpg",
      content: `
        <p>We're excited to announce the launch of SECURESIST, a revolutionary cybersecurity awareness platform designed to transform how organizations approach human risk management.</p>
        
        <h2>Addressing the Human Element</h2>
        <p>Traditional security training often fails because it's generic, boring, and disconnected from real-world threats. SECURESIST changes that by delivering role-based, interactive training that employees actually want to complete.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li><strong>Role-Based Content:</strong> Every employee receives training tailored to their specific role and responsibilities.</li>
          <li><strong>Interactive Modules:</strong> Short, engaging 5-10 minute lessons that keep learners motivated.</li>
          <li><strong>Phishing Simulations:</strong> Realistic testing scenarios that prepare teams for actual threats.</li>
          <li><strong>Comprehensive Reporting:</strong> Clear dashboards that show progress and identify areas for improvement.</li>
        </ul>
        
        <h2>The Impact</h2>
        <p>Early adopters have seen remarkable results:</p>
        <ul>
          <li>98% training completion rate</li>
          <li>75% reduction in security incidents</li>
          <li>Significant improvement in employee security awareness</li>
        </ul>
        
        <h2>What's Next</h2>
        <p>We're continuously improving SECURESIST based on customer feedback. Upcoming features include advanced analytics, AI-powered content recommendations, and expanded compliance framework support.</p>
        
        <p>To learn more about how SECURESIST can help your organization, <a href="/contact">contact our team</a> for a personalized demo.</p>
      `,
    },
    "build-security-culture-90-days": {
      slug: "build-security-culture-90-days",
      title: "5 Practical Ways to Build a Security Culture in 90 Days",
      excerpt: "From role-based training to adaptive phishing simulations, here's how teams move the needle quickly.",
      date: "2025-01-28",
      readTime: "8 min read",
      author: "Sarah Johnson",
      authorRole: "Security Consultant",
      category: "Best Practices",
      image: "/contact_us.jpg",
      content: `
        <p>Building a strong security culture doesn't happen overnight, but with the right approach, you can see meaningful progress in just 90 days. Here are five proven strategies that work.</p>
        
        <h2>1. Start with Leadership Buy-In</h2>
        <p>Security culture starts at the top. When executives actively participate in training and demonstrate security best practices, employees take notice. Schedule regular security briefings for leadership and make security a standing agenda item in team meetings.</p>
        
        <h2>2. Implement Role-Based Training</h2>
        <p>One-size-fits-all training doesn't work. Tailor your content to specific roles:</p>
        <ul>
          <li>IT teams need technical deep-dives</li>
          <li>Finance teams need fraud prevention focus</li>
          <li>HR teams need data privacy emphasis</li>
        </ul>
        
        <h2>3. Make It Interactive and Engaging</h2>
        <p>Gamification, interactive scenarios, and short modules keep learners engaged. Use real-world examples and make the content relatable to daily work activities.</p>
        
        <h2>4. Regular Phishing Simulations</h2>
        <p>Test your training effectiveness with realistic phishing simulations. Start with easier scenarios and gradually increase difficulty. Provide immediate feedback and remediation training for those who click.</p>
        
        <h2>5. Celebrate Success and Learn from Failures</h2>
        <p>Recognize teams and individuals who excel in security awareness. Share success stories and use incidents (anonymized) as learning opportunities rather than punishment.</p>
        
        <h2>Measuring Success</h2>
        <p>Track key metrics:</p>
        <ul>
          <li>Training completion rates</li>
          <li>Phishing simulation click rates</li>
          <li>Security incident frequency</li>
          <li>Employee engagement scores</li>
        </ul>
        
        <p>With consistent effort and the right tools, you'll see a noticeable improvement in your security culture within 90 days.</p>
      `,
    },
    "compliance-ready-reporting": {
      slug: "compliance-ready-reporting",
      title: "Compliance-Ready Reporting: What Auditors Want to See",
      excerpt: "Map training outcomes to frameworks and simplify evidence collection with clear dashboards.",
      date: "2025-01-12",
      readTime: "6 min read",
      author: "Michael Chen",
      authorRole: "Compliance Specialist",
      category: "Compliance",
      image: "/contact_us.jpg",
      content: `
        <p>When it comes to compliance audits, having the right documentation and reporting can make all the difference. Auditors need clear, comprehensive evidence that your security training program is effective and meets regulatory requirements.</p>
        
        <h2>Understanding Auditor Expectations</h2>
        <p>Auditors look for several key elements in security training reports:</p>
        <ul>
          <li><strong>Completeness:</strong> Evidence that all employees have completed required training</li>
          <li><strong>Timeliness:</strong> Training completed within required timeframes</li>
          <li><strong>Effectiveness:</strong> Proof that training is actually working</li>
          <li><strong>Documentation:</strong> Clear records of who, what, when, and how</li>
        </ul>
        
        <h2>Key Metrics to Track</h2>
        <p>Your compliance reporting should include:</p>
        <ul>
          <li>Training completion rates by department and role</li>
          <li>Assessment scores and improvement over time</li>
          <li>Phishing simulation results</li>
          <li>Remediation training completion</li>
          <li>Policy acknowledgment records</li>
        </ul>
        
        <h2>Framework Mapping</h2>
        <p>Map your training outcomes to specific compliance frameworks:</p>
        <ul>
          <li><strong>ISO 27001:</strong> Information security management</li>
          <li><strong>NIST:</strong> Cybersecurity framework alignment</li>
          <li><strong>GDPR:</strong> Data protection and privacy training</li>
          <li><strong>HIPAA:</strong> Healthcare data security requirements</li>
          <li><strong>SOC 2:</strong> Security controls and processes</li>
        </ul>
        
        <h2>Best Practices for Reporting</h2>
        <p>Create reports that tell a clear story:</p>
        <ul>
          <li>Use visual dashboards for quick overview</li>
          <li>Include trend analysis showing improvement</li>
          <li>Document exceptions and remediation plans</li>
          <li>Provide executive summaries for leadership</li>
          <li>Maintain detailed records for audit trails</li>
        </ul>
        
        <p>With proper reporting in place, compliance audits become straightforward processes rather than stressful events.</p>
      `,
    },
    "partner-spotlight-securesist": {
      slug: "partner-spotlight-securesist",
      title: "Partner Spotlight: Accelerating Outcomes with SECURESIST",
      excerpt: "How service partners attach awareness programs to risk assessments and vCISO offerings for maximum impact.",
      date: "2024-12-19",
      readTime: "7 min read",
      author: "David Martinez",
      authorRole: "Partnership Director",
      category: "Partners",
      image: "/contact_us.jpg",
      content: `
        <p>Our partner ecosystem is growing, and we're seeing incredible results from service providers who integrate SECURESIST into their cybersecurity offerings. Here's how leading partners are creating value for their clients.</p>
        
        <h2>Integrating with Risk Assessments</h2>
        <p>Forward-thinking partners are using SECURESIST as a core component of their risk assessment services. By combining technical security assessments with human risk evaluation, they provide a complete picture of organizational security posture.</p>
        
        <h2>vCISO Service Enhancement</h2>
        <p>Virtual CISO services are becoming more comprehensive with SECURESIST integration. Partners can now offer:</p>
        <ul>
          <li>Ongoing security awareness programs</li>
          <li>Regular phishing simulation campaigns</li>
          <li>Compliance-ready reporting and documentation</li>
          <li>Measurable improvement in security culture</li>
        </ul>
        
        <h2>Success Story: TechSecure Solutions</h2>
        <p>TechSecure Solutions, one of our premier partners, has seen remarkable results:</p>
        <ul>
          <li>40% increase in client retention</li>
          <li>Average 60% reduction in security incidents across their client base</li>
          <li>New revenue streams from training services</li>
          <li>Enhanced reputation as comprehensive security providers</li>
        </ul>
        
        <h2>Partner Benefits</h2>
        <p>Partners enjoy several advantages:</p>
        <ul>
          <li><strong>White-label options:</strong> Brand the platform as your own</li>
          <li><strong>Revenue sharing:</strong> Earn recurring revenue from training subscriptions</li>
          <li><strong>Technical support:</strong> Dedicated partner success team</li>
          <li><strong>Marketing materials:</strong> Co-branded resources and case studies</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>Becoming a SECURESIST partner is straightforward. We provide comprehensive onboarding, training, and ongoing support to ensure your success. Whether you're a managed service provider, security consultancy, or vCISO firm, we have a partnership model that fits.</p>
        
        <p>Interested in becoming a partner? <a href="/contact">Contact our partnership team</a> to learn more.</p>
      `,
    },
    "phishing-simulation-best-practices": {
      slug: "phishing-simulation-best-practices",
      title: "Phishing Simulation Best Practices: A Complete Guide",
      excerpt: "Learn how to design effective phishing campaigns that educate without overwhelming your employees.",
      date: "2024-12-05",
      readTime: "10 min read",
      author: "Emily Rodriguez",
      authorRole: "Security Training Specialist",
      category: "Training",
      image: "/contact_us.jpg",
      content: `
        <p>Phishing simulations are one of the most effective tools for improving security awareness, but they need to be done right. Poorly designed campaigns can backfire, creating fear and resentment rather than learning opportunities.</p>
        
        <h2>Setting Clear Objectives</h2>
        <p>Before launching any phishing simulation, define what you want to achieve:</p>
        <ul>
          <li>Baseline assessment of current awareness levels</li>
          <li>Training reinforcement for specific threat types</li>
          <li>Testing response to new attack vectors</li>
          <li>Measuring improvement over time</li>
        </ul>
        
        <h2>Designing Effective Campaigns</h2>
        <p>Effective phishing simulations share several characteristics:</p>
        <ul>
          <li><strong>Realistic but not malicious:</strong> Use scenarios that mirror real threats without causing harm</li>
          <li><strong>Graduated difficulty:</strong> Start with obvious phishing attempts and increase sophistication</li>
          <li><strong>Relevant content:</strong> Use scenarios that match your industry and common threats</li>
          <li><strong>Clear indicators:</strong> Include teachable moments that help users learn</li>
        </ul>
        
        <h2>Common Phishing Templates</h2>
        <p>Some of the most effective templates include:</p>
        <ul>
          <li>Urgent password reset requests</li>
          <li>Invoice and payment requests</li>
          <li>Package delivery notifications</li>
          <li>Internal communication spoofing</li>
          <li>Social media login alerts</li>
        </ul>
        
        <h2>Timing and Frequency</h2>
        <p>Balance is key when it comes to simulation frequency:</p>
        <ul>
          <li>Start with monthly campaigns</li>
          <li>Adjust based on click rates and feedback</li>
          <li>Avoid overwhelming employees</li>
          <li>Vary campaign timing to test awareness consistently</li>
        </ul>
        
        <h2>Handling Click-Throughs</h2>
        <p>When employees click on simulated phishing emails:</p>
        <ul>
          <li>Provide immediate, constructive feedback</li>
          <li>Offer remediation training automatically</li>
          <li>Focus on education, not punishment</li>
          <li>Track patterns to identify training gaps</li>
        </ul>
        
        <h2>Measuring Success</h2>
        <p>Track these key metrics:</p>
        <ul>
          <li>Click-through rates over time</li>
          <li>Remediation training completion</li>
          <li>Report rates (employees flagging suspicious emails)</li>
          <li>Improvement in subsequent campaigns</li>
        </ul>
        
        <p>Remember, the goal is education and improvement, not catching people making mistakes. A well-designed phishing simulation program builds a stronger security culture.</p>
      `,
    },
    "measuring-security-awareness-roi": {
      slug: "measuring-security-awareness-roi",
      title: "Measuring Security Awareness ROI: Key Metrics That Matter",
      excerpt: "Discover the metrics that truly matter when evaluating the success of your cybersecurity training program.",
      date: "2024-11-20",
      readTime: "9 min read",
      author: "James Wilson",
      authorRole: "Security Analyst",
      category: "Analytics",
      image: "/contact_us.jpg",
      content: `
        <p>Proving the value of security awareness training can be challenging, but with the right metrics, you can demonstrate clear ROI to stakeholders. Here's what to measure and how to present it.</p>
        
        <h2>Quantitative Metrics</h2>
        <p>These hard numbers show clear impact:</p>
        <ul>
          <li><strong>Training Completion Rates:</strong> Percentage of employees who complete required training</li>
          <li><strong>Phishing Click Rates:</strong> Reduction in click-through rates on simulated attacks</li>
          <li><strong>Security Incident Reduction:</strong> Decrease in security incidents over time</li>
          <li><strong>Time to Detection:</strong> How quickly employees report suspicious activity</li>
          <li><strong>Remediation Speed:</strong> Time to complete remediation training after incidents</li>
        </ul>
        
        <h2>Qualitative Metrics</h2>
        <p>These metrics capture the cultural impact:</p>
        <ul>
          <li>Employee confidence in identifying threats</li>
          <li>Security culture survey scores</li>
          <li>Employee engagement with training content</li>
          <li>Feedback and satisfaction ratings</li>
          <li>Leadership perception of security posture</li>
        </ul>
        
        <h2>Calculating ROI</h2>
        <p>To calculate ROI, consider both costs and benefits:</p>
        <ul>
          <li><strong>Costs:</strong> Platform fees, employee time, content development</li>
          <li><strong>Benefits:</strong> Reduced incidents, lower breach costs, compliance savings, improved productivity</li>
        </ul>
        
        <h2>Benchmarking</h2>
        <p>Compare your metrics to industry standards:</p>
        <ul>
          <li>Average phishing click rate: 3-5% (aim for under 2%)</li>
          <li>Training completion: Target 95%+</li>
          <li>Incident reduction: 50-75% is typical after 12 months</li>
          <li>Time to report: Under 1 hour for critical threats</li>
        </ul>
        
        <h2>Presenting Results</h2>
        <p>Make your data compelling:</p>
        <ul>
          <li>Use visual dashboards and charts</li>
          <li>Show trends over time</li>
          <li>Highlight specific success stories</li>
          <li>Connect metrics to business outcomes</li>
          <li>Provide executive summaries</li>
        </ul>
        
        <h2>Continuous Improvement</h2>
        <p>ROI measurement isn't a one-time activity. Regularly review metrics to:</p>
        <ul>
          <li>Identify areas for improvement</li>
          <li>Adjust training content and frequency</li>
          <li>Recognize and reward high performers</li>
          <li>Address gaps in specific departments or roles</li>
        </ul>
        
        <p>With proper measurement and reporting, security awareness training becomes a strategic investment with clear, demonstrable returns.</p>
      `,
    },
  };

  return posts[slug] || null;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Announcement: "bg-blue-100 text-blue-700 border-blue-200",
    "Best Practices": "bg-green-100 text-green-700 border-green-200",
    Compliance: "bg-purple-100 text-purple-700 border-purple-200",
    Partners: "bg-orange-100 text-orange-700 border-orange-200",
    Training: "bg-cyan-100 text-cyan-700 border-cyan-200",
    Analytics: "bg-pink-100 text-pink-700 border-pink-200",
  };
  return colors[category] || "bg-slate-100 text-slate-700 border-slate-200";
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = use(params);
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/press-center">Back to Blog</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Navigation */}
      <section className="border-b border-slate-200 bg-slate-50/50">
        <div className="container mx-auto px-4 py-4">
          <Button
            asChild
            variant="ghost"
            className="text-slate-600 hover:text-slate-900"
          >
            <Link href="/press-center" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <Badge variant="outline" className={`mb-4 ${getCategoryColor(post.category)}`}>
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Meta Information */}
            <div className="mb-8 pb-8 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-semibold">{post.author}</span>
                  {post.authorRole && (
                    <span className="text-slate-400">• {post.authorRole}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-black prose-headings:text-slate-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6
                prose-li:text-slate-700 prose-li:mb-2
                prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
              <div className="flex items-start gap-4">
                <BookOpen className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Ready to Transform Your Security Training?
                  </h3>
                  <p className="text-slate-600 mb-6">
                    See how SECURESIST can help your organization build a stronger security culture.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link href="/contact">Request a Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

