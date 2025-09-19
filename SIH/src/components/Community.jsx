import "./Community.css";

function Community() {
  return (
    <div className="community-container">
      <div className="resource-hub-header">
        <h1 className="hub-title">Mental Health Resource Hub</h1>
        <p className="hub-subtitle">Discover Tools, Support & Guidance for Your Wellness Journey</p>
      </div>
      <div className="page-header">
        <div className="page-slogan">
          <p className="slogan-text">"Your Mental Health Journey is Not Alone"</p>
          <p className="slogan-subtext">Join thousands of students finding strength, support, and healing in our caring community</p>
        </div>
      </div>
      <div className="bento-grid">
        <div className="card card-1">
          <div className="card-content">
            <h3 className="card-title">Group Therapy Sessions</h3>
            <p className="card-description">Join our supportive group therapy sessions where you can connect with peers facing similar challenges in a safe, confidential environment</p>
            <div className="session-info">
              <div className="info-item">
                <i className="fa-solid fa-users"></i>
                <span>6-10 participants per session</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-clock"></i>
                <span>Every Tuesday & Thursday, 6-7:30 PM</span>
              </div>
              <div className="info-item">
                <i className="fa-solid fa-user-doctor"></i>
                <span>Licensed therapist facilitated</span>
              </div>
            </div>
            <div className="benefits-list">
              <div className="benefit-item">• Peer support & understanding</div>
              <div className="benefit-item">• Shared coping strategies</div>
              <div className="benefit-item">• Reduced isolation feelings</div>
            </div>
            <button className="join-btn">Join Session</button>
          </div>
        </div>
        <div className="card card-2">
          <div className="card-content">
            <h3 className="card-title">Stress Busters</h3>
            <p className="card-description">Fun and therapeutic activities designed to help students unwind, relax, and recharge their minds</p>
            <div className="activities-list">
              <div className="activity-item">
                <i className="fa-solid fa-music"></i>
                <span>Music Therapy & Singing</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-palette"></i>
                <span>Art & Creative Expression</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-leaf"></i>
                <span>Guided Meditation</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-gamepad"></i>
                <span>Interactive Games & Puzzles</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-walking"></i>
                <span>Nature Walks & Fresh Air</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-dumbbell"></i>
                <span>Light Physical Exercise</span>
              </div>
            </div>
            <div className="schedule-info">
              <i className="fa-solid fa-calendar"></i>
              <span>Daily sessions at 3 PM & 7 PM</span>
            </div>
            <button className="join-btn">Explore Activities</button>
          </div>
        </div>
        <div className="card card-3">
          <div className="card-content">
            <h3 className="card-title">Yoga & Mind Peace</h3>
            <p className="card-description">Find inner balance through mindful movement, breathing techniques, and peaceful meditation practices</p>
            <div className="activities-list">
              <div className="activity-item">
                <i className="fa-solid fa-hands-praying"></i>
                <span>Hatha Yoga (Beginner)</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-brain"></i>
                <span>Mindfulness Training</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-spa"></i>
                <span>Pranayama Breathing</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-moon"></i>
                <span>Sleep Meditation</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-sun"></i>
                <span>Morning Energizer</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-heart"></i>
                <span>Self-Compassion Practice</span>
              </div>
            </div>
            <div className="schedule-info">
              <i className="fa-solid fa-calendar"></i>
              <span>Daily at 7 AM & 6 PM</span>
            </div>
            <button className="join-btn">Join Yoga</button>
          </div>
        </div>
        <div className="card card-4">
          <div className="card-content">
            <h3 className="card-title">Spirituality Sessions</h3>
            <p className="card-description">Connect with your inner self through diverse spiritual practices, philosophical discussions, and guided self-discovery</p>
            <div className="activities-list">
              <div className="activity-item">
                <i className="fa-solid fa-dove"></i>
                <span>Inner Peace Meditation</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-om"></i>
                <span>Philosophical Discussions</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-candle-holder"></i>
                <span>Mindful Reflection</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-heart"></i>
                <span>Gratitude & Compassion</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-book-open"></i>
                <span>Wisdom Sharing Circle</span>
              </div>
            </div>
            <div className="topics-section">
              <h4 className="topics-title">This Week's Focus:</h4>
              <p className="current-topic">"Finding Purpose & Meaning in Daily Life"</p>
            </div>
            <div className="schedule-info">
              <i className="fa-solid fa-clock"></i>
              <span>Sundays, 10-11:30 AM</span>
            </div>
            <button className="join-btn">Join Session</button>
          </div>
        </div>
        <div className="card card-5">
          <div className="card-content">
            <h3 className="card-title">Expert Speaker Series</h3>
            <p className="card-description">Learn from renowned mental health professionals, life coaches, and inspiring speakers who share practical wisdom and guidance</p>
            <div className="activities-list">
              <div className="activity-item">
                <i className="fa-solid fa-microphone"></i>
                <span>Mental Health Experts</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-user-tie"></i>
                <span>Life Coaches & Mentors</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-lightbulb"></i>
                <span>Success Stories</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-comments"></i>
                <span>Interactive Q&A</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-certificate"></i>
                <span>Certified Professionals</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-download"></i>
                <span>Resource Downloads</span>
              </div>
            </div>
            <div className="speaker-highlight">
              <div className="next-speaker">
                <strong>Next Speaker:</strong> Dr. Sarah Chen - "Overcoming Academic Anxiety"
              </div>
            </div>
            <div className="schedule-info">
              <i className="fa-solid fa-calendar-week"></i>
              <span>Every Friday, 4-5:30 PM</span>
            </div>
            <button className="join-btn">Attend Talk</button>
          </div>
        </div>
        <div className="card card-6">
          <div className="card-content">
            <h3 className="card-title">Mind Boosting Quizzes</h3>
            <p className="card-description">Interactive quizzes and brain games designed to refresh your mind and boost cognitive abilities</p>
            <div className="activities-list">
              <div className="activity-item">
                <i className="fa-solid fa-brain"></i>
                <span>Memory Enhancement</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-lightbulb"></i>
                <span>Problem Solving</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-puzzle-piece"></i>
                <span>Logic Puzzles</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-chart-line"></i>
                <span>Focus Training</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-trophy"></i>
                <span>Daily Challenges</span>
              </div>
              <div className="activity-item">
                <i className="fa-solid fa-medal"></i>
                <span>Achievement Badges</span>
              </div>
            </div>
            <div className="topics-section">
              <h4 className="topics-title">Today's Challenge</h4>
              <p className="current-topic">"Quick Math & Pattern Recognition" - Boost your analytical thinking and problem-solving skills!</p>
            </div>
            <div className="schedule-info">
              <i className="fa-solid fa-clock"></i>
              <span>New quizzes every day</span>
            </div>
            <button className="join-btn">Start Quiz</button>
          </div>
        </div>
        <div className="card card-7">
          <div className="card-content premium-card">
            <div className="premium-badge">
              <i className="fa-solid fa-crown"></i>
              <span>PREMIUM</span>
            </div>
            <div className="premium-info">
              <h3 className="card-title">SoulSpace Premium</h3>
              <p className="card-description">Unlock exclusive mental health resources and personalized support</p>
              <div className="premium-features">
                <div className="feature-item">
                  <i className="fa-solid fa-comments"></i>
                  <span>24/7 AI Chat</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-user-doctor"></i>
                  <span>1-on-1 Sessions</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-calendar-plus"></i>
                  <span>Priority Booking</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-chart-line"></i>
                  <span>Progress Analytics</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-users-gear"></i>
                  <span>Group Sessions</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-mobile-screen"></i>
                  <span>Mobile Access</span>
                </div>
              </div>
            </div>
            <div className="premium-actions">
              <div className="premium-pricing">
                <span className="price">₹299/month</span>
                <span className="price-note">Cancel anytime • 7-day free trial</span>
              </div>
              <button className="join-btn premium-btn">Start Free Trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
