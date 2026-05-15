<template>
  <section class="resume-page">
    <!-- Header -->
    <div class="header-section">
      <h1 class="name">Carly Bergthold</h1>
      <p class="location">📍 Denver, CO</p>
      <p class="contact-info">
        <span>📧 carlybergthold@gmail.com</span>
        <span>📱 615-812-0801</span>
      </p>
      <p class="summary">
        Full-stack software engineer crafting succinct, high-quality, and reusable code in agile, collaborative environments. Liaison and tech guide throughout the product development pipeline, expert communicator, and dev team resource.
      </p>
    </div>

    <!-- Main Content Grid -->
    <div class="content-grid">
      <!-- Work Experience -->
      <div class="section">
        <h2 class="section-title" @click="toggleSection('experience')">
          💼 Work Experience
          <span class="toggle-icon">{{ sections.experience ? '▼' : '▶' }}</span>
        </h2>
        <div v-show="sections.experience" class="section-content">
          <div v-for="(job, index) in workExperience" :key="index" class="job-card">
            <div class="job-header" @click="toggleJob(index)">
              <div>
                <h3 class="job-title">{{ job.title }}</h3>
                <p class="company">{{ job.company }}</p>
              </div>
              <div class="job-dates">{{ job.dates }}</div>
              <span class="job-toggle">{{ expandedJobs.has(index) ? '−' : '+' }}</span>
            </div>
            <transition name="expand">
              <ul v-show="expandedJobs.has(index)" class="job-responsibilities">
                <li v-for="(responsibility, idx) in job.responsibilities" :key="idx">
                  {{ responsibility }}
                </li>
              </ul>
            </transition>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="section">
        <h2 class="section-title" @click="toggleSection('skills')">
          ⚙️ Skills
          <span class="toggle-icon">{{ sections.skills ? '▼' : '▶' }}</span>
        </h2>
        <div v-show="sections.skills" class="section-content">
          <div v-for="category in skillCategories" :key="category.name" class="skill-category">
            <h3 class="category-name">{{ category.name }}</h3>
            <div class="skill-tags">
              <span v-for="skill in category.skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="section">
        <h2 class="section-title" @click="toggleSection('education')">
          🎓 Education
          <span class="toggle-icon">{{ sections.education ? '▼' : '▶' }}</span>
        </h2>
        <div v-show="sections.education" class="section-content">
          <div v-for="(degree, index) in education" :key="index" class="education-card">
            <h3>{{ degree.degree }}</h3>
            <p class="school">{{ degree.school }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResumePage',
  data() {
    return {
      sections: {
        experience: true,
        skills: true,
        education: true
      },
      expandedJobs: new Set([0, 1]),
      workExperience: [
        {
          title: 'Manager, Application Development',
          company: 'Valenz Health (acquired Bluebook in 2024)',
          dates: 'Sept 2025 - Present',
          responsibilities: [
            'Identify, triage, and address bugs and performance issues in production application used by 1M+ users',
            'Conduct one-on-ones, performance reviews, and career development planning for team of 5 developers',
            'Prepare and lead refinement; architect solutions',
            'Lead sprint'
          ]
        },        
        {
          title: 'Tech Lead, Sr. Developer',
          company: 'Valenz Health (acquired Bluebook in 2024)',
          dates: 'Jan 2025 - Sept 2025',
          responsibilities: [
            'Train and advise team of 5 developers on existing app design and best practices',
            'Conduct thorough code reviews and identify team learning opportunities, i.e. utilizing Angular signals to improve performance and reduce reliance on RxJS',
            'Act as go-between for product and developers in refinement meetings, identifying any gaps in requirements and advising on level of effort required',
            'Spearhead implementation details for new projects with architecture team and identify/solve any impediments that come up during development process'
          ]
        },
        {
          title: 'Tech Lead, Developer III',
          company: 'Healthcare Bluebook',
          dates: 'June 2024 - Dec 2024',
          responsibilities: [
            'Contributed 25% of total velocity across six-person team in 2024 calendar year',
            'Monitored application security, analytics, and issues with platforms such as Snyk, StackHawk, DataDog, and proprietary logging',
            'Led incident response for bugs in production and urgent client needs, integrating new tasks into sprint work and coordinating hotfixes',
            'Identified technical debt and other optimizations to the codebase, i.e. consolidating all UI popups to derive from one base component with multiple directives',
            'Designed REST APIs for client/mobile use, as well as consumed third-party APIs for the web app'
          ]
        },
        {
          title: 'Software Developer II, III',
          company: 'Healthcare Bluebook',
          dates: 'March 2021 - May 2024',
          responsibilities: [
            'Collaborated within and across teams, such as Quality Assurance, Data Engineering, and Site Reliability Engineering, to drive project success',
            'Developed and maintained unit and integration testing with Xunit, Moq, and Jasmine'
          ]
        },
        {
          title: 'Software Developer I',
          company: 'EFC Systems',
          dates: 'Sept 2019 - March 2021',
          responsibilities: [
            'Implemented and updated features for agricultural retailer platform using C#, VB.NET, WinForms, and SQL',
            'Part of 2-person team to design greenfield client portal app using Vue.js and TypeScript'
          ]
        }
      ],
      skillCategories: [
        {
          name: 'Frontend',
          skills: ['HTML, CSS', 'TypeScript', 'Angular', 'Vue', 'React']
        },
        {
          name: 'Backend',
          skills: ['C# / .NET', 'MSSQL', 'Azure AI Search', 'Entity Framework']
        },
        {
          name: 'Other Skills',
          skills: ['Azure DevOps', 'Agile/SCRUM', 'WCAG Compliance', 'REST APIs']
        }
      ],
      education: [
        {
          degree: 'Software Development Bootcamp',
          school: 'Nashville Software School'
        },
        {
          degree: 'Bachelor of Arts in Journalism',
          school: 'Lipscomb University'
        }
      ]
    }
  },
  methods: {
    toggleSection(section) {
      this.sections[section] = !this.sections[section];
    },
    toggleJob(index) {
      if (this.expandedJobs.has(index)) {
        this.expandedJobs.delete(index);
      } else {
        this.expandedJobs.add(index);
      }
      this.expandedJobs = new Set(this.expandedJobs);
    }
  }
}
</script>

<style scoped>
.resume-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header-section {
  max-width: 1000px;
  margin: 0 auto 50px;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.name {
  font-size: 48px;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px 0;
}

.location {
  font-size: 20px;
  color: #666;
  margin: 5px 0;
}

.contact-info {
  font-size: 14px;
  color: #999;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 15px 0 25px 0;
  flex-wrap: wrap;
}

.summary {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  font-style: italic;
}

.content-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.section {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.section-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px 30px;
  margin: 0;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  transition: transform 0.3s ease;
}

.section-title:hover {
  transform: translateX(5px);
}

.toggle-icon {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.section-content {
  padding: 30px;
}

/* Job Cards */
.job-card {
  margin-bottom: 20px;
  border-left: 4px solid #667eea;
  padding-left: 20px;
}

.job-card:last-child {
  margin-bottom: 0;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  gap: 20px;
  user-select: none;
}

.job-header:hover {
  opacity: 0.8;
}

.job-header > div:first-child {
  flex: 1;
}

.job-title {
  margin: 0 0 5px 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;
}

.company {
  margin: 0;
  color: #667eea;
  font-size: 14px;
  font-weight: 500;
}

.job-dates {
  color: #999;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 500;
}

.job-toggle {
  color: #667eea;
  font-size: 20px;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

.job-responsibilities {
  list-style: none;
  padding: 15px 0 0 0;
  margin: 0;
  border-top: 1px solid #eee;
}

.job-responsibilities li {
  padding: 8px 0;
  color: #555;
  font-size: 14px;
  line-height: 1.6;
  position: relative;
  padding-left: 20px;
}

.job-responsibilities li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

/* Skills */
.skill-category {
  margin-bottom: 25px;
}

.skill-category:last-child {
  margin-bottom: 0;
}

.category-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

/* Education */
.education-card {
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9ff;
  border-radius: 8px;
  border-left: 4px solid #764ba2;
}

.education-card:last-child {
  margin-bottom: 0;
}

.education-card h3 {
  margin: 0 0 5px 0;
  color: #333;
  font-size: 16px;
}

.school {
  margin: 0;
  color: #764ba2;
  font-size: 14px;
  font-weight: 500;
}

/* Transitions */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .resume-page {
    padding: 30px 15px;
  }

  .header-section {
    padding: 30px 20px;
  }

  .name {
    font-size: 36px;
  }

  .contact-info {
    flex-direction: column;
    gap: 10px;
  }

  .job-header {
    flex-direction: column;
    gap: 10px;
  }

  .job-dates {
    white-space: normal;
  }

  .section-title {
    font-size: 20px;
    padding: 15px 20px;
  }

  .section-content {
    padding: 20px;
  }
}
</style>