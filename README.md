# ASTRONAV NX — Frontend Product & Training Portal

> **Professional Astronomy, Celestial Navigation & Immersive Training Platform**

ASTRONAV NX is a professional, space-themed training and education platform designed to combine **celestial navigation, astronomy, simulation, immersive learning, instructor management, assessment, analytics, AI assistance, hardware integration, and public space education** in one scalable product.

This README defines the frontend screens, user workflows, modules, and functionality that will be implemented in the ASTRONAV NX frontend.

---

## 1. Product Vision

ASTRONAV NX is designed as an international-level platform with two major experiences:

### A. Training Portal
For professional trainees, instructors, training centers, academies, and institutional clients.

### B. Entertainment & Space Education
For students, visitors, museums, planetariums, science centers, and general users.

The platform should feel like a combination of:

- Professional maritime/navigation training system
- Celestial navigation simulator
- Immersive VR/MR learning platform
- Digital planetarium
- Space education platform
- Instructor command and assessment system

---

# 2. Frontend Architecture

```text
ASTRONAV NX
│
├── Authentication
│   ├── Login
│   ├── Forgot Password
│   └── Two-Factor Authentication
│
├── Training Portal
│   ├── Dashboard
│   ├── Courses
│   ├── Celestial Navigation Trainer
│   ├── Simulations
│   ├── My Progress
│   ├── Results & Reports
│   ├── Live Sessions
│   ├── Assessments
│   ├── AI Tutor
│   └── Achievements
│
├── Instructor Portal
│   ├── Instructor Dashboard
│   ├── Trainees
│   ├── Scenario Builder
│   ├── Live Simulation Control
│   ├── Course Management
│   ├── Assessment Management
│   └── Analytics
│
├── Hardware & System
│   ├── Device Management
│   ├── Calibration / Device Health
│   ├── Offline Mode
│   └── System Status
│
├── User Services
│   ├── Profile
│   ├── Settings
│   ├── Notifications
│   ├── Messages
│   └── Help Center
│
└── Public / Entertainment
    ├── 3D Planetarium
    ├── Space Explorer
    ├── Solar System
    ├── Astronomy Explorer
    ├── Young Astronaut
    ├── Space Missions
    ├── Virtual Telescope
    └── Space Challenges / Quiz
```

---

# 3. Authentication

## 3.1 Login Screen

The login screen will provide:

- AstroNav NX branding
- Email / username
- Password
- Show/hide password
- Remember me
- Forgot password
- Login
- Registration / account request where enabled
- Secure institutional branding
- Language selection
- Support access

The visual design should remain premium, dark, space-themed, and professional.

---

## 3.2 Forgot Password

Functionality:

- Email / username input
- Send reset instructions
- Back to login
- Secure reset flow
- Confirmation message

---

## 3.3 Two-Factor Authentication

Functionality:

- 6-digit verification code
- Resend code
- Verification timer
- Back to login
- Secure authentication state

Future support may include authenticator applications or institutional SSO.

---

# 4. Training Dashboard

The main dashboard will provide a complete overview of the trainee's current training state.

## Dashboard Widgets

- Overall training progress
- Current course
- Next lesson
- Upcoming session
- Pending assessments
- Completed courses
- Simulation hours
- Skill score
- Recent activity
- Achievements / badges
- Recommended training
- Notifications
- AI Tutor shortcut

## Quick Access

- Celestial Navigation
- Courses
- Simulations
- Live Sessions
- AI Tutor
- Progress
- Assessments

---

# 5. Courses

The Courses module will display professional training programs in a searchable and filterable interface.

## Course Card

Each course should show:

- Course image
- Course title
- Level
- Category
- Progress
- Completion percentage
- Instructor
- Duration
- Status
- Continue / Start button

## Filters

- Beginner
- Intermediate
- Advanced
- Completed
- In Progress
- Not Started
- Category

## Course Detail

Each course will contain:

- Course overview
- Learning objectives
- Modules
- Lessons
- Practical exercises
- Simulations
- Assessments
- Instructor
- Progress
- Completion requirements
- Certificate status

---

# 6. Learning Path / Curriculum

Training should follow a structured workflow:

```text
Course
  ↓
Module
  ↓
Lesson
  ↓
Knowledge Check
  ↓
Practice
  ↓
Simulation
  ↓
Assessment
  ↓
Instructor Review
  ↓
AAR
  ↓
Remedial Training if required
  ↓
Completion / Certificate
```

The architecture should support future competency and certification mapping.

---

# 7. Celestial Navigation Trainer

This is one of the core ASTRONAV NX features.

## Main Interface

The trainer will display:

- Realistic star field
- Constellations
- Sun
- Moon
- Planets
- Horizon
- Observer position
- Time
- Navigation instruments
- Sextant interface
- Navigation task panel

## Training Tasks

Examples:

- Identify Polaris
- Identify stars
- Determine altitude
- Measure celestial body
- Record observation time
- Calculate sight
- Create Line of Position
- Obtain position fix
- Compare result with ground truth

## Trainer Controls

- Start task
- Next task
- Hint
- Pause
- Resume
- Restart
- Observation history

---

# 8. Smart Sextant Integration

The frontend should support physical / simulated Smart Sextant devices.

## Device Information

Display:

- Connection status
- Device ID
- Battery
- Calibration status
- IMU status
- Sensor status
- Firmware
- Last synchronization
- Device health

## Observation Workflow

```text
Connect Device
    ↓
Check Device Health
    ↓
Calibration
    ↓
Select Celestial Body
    ↓
Take Observation
    ↓
Capture Altitude / Bearing / Time
    ↓
Sight Reduction
    ↓
LOP
    ↓
Position Fix
    ↓
Ground Truth Comparison
    ↓
Score
```

---

# 9. 3D Planetarium

The 3D Planetarium provides an interactive solar-system environment.

## Features

- Interactive Sun
- Planets
- Moons
- Orbits
- Planet information
- Search
- Zoom
- Pan
- Rotate
- Time controls
- Date controls
- Planet information panel
- Guided exploration
- Educational information

## Navigation

Users should be able to move through:

```text
Solar System
   ↓
Planet
   ↓
Moon
   ↓
Surface / Information
```

---

# 10. Simulations

The Simulation Center will provide simulation cards with:

- Image
- Title
- Description
- Difficulty
- Progress
- Completion status
- Duration
- Start / Continue button

## Initial Simulation Categories

- Star Identification
- Solar System
- Galaxy Exploration
- Virtual Ship Navigation
- Night Sky
- Sextant Practice
- Celestial Navigation
- GNSS Resilience
- Navigation System Awareness
- Weather / Environment
- Emergency Scenarios

The architecture should allow additional simulation types to be added without redesigning the frontend.

---

# 11. Resilient PNT / GNSS Training

A major professional training module.

## Navigation Sources

The interface may display:

- GNSS
- Gyro / heading
- Compass
- Radar
- AIS
- Celestial Navigation
- Dead Reckoning
- Alternative PNT sources

## Navigation Confidence

The system should be able to visually communicate:

- Source status
- Source confidence
- Integrity warning
- Sensor disagreement
- Position confidence
- Navigation alerts

Example:

```text
GNSS       DEGRADED
Compass    NORMAL
Radar      NORMAL
AIS        NORMAL
CelNav     AVAILABLE

Overall Position Confidence: 81%
```

## Scenario Workflow

```text
Normal Navigation
       ↓
GNSS Degradation / Loss
       ↓
Trainee Detects Anomaly
       ↓
Cross-Check Navigation Sources
       ↓
Select Alternative PNT
       ↓
Celestial Verification
       ↓
Position Fix
       ↓
Report / Decision
       ↓
Assessment
       ↓
AAR
```

---

# 12. E-Navigation / Navigation Systems

Future-ready frontend architecture should support:

## ECDIS

- Digital chart
- Route
- Waypoints
- Position
- Safety information
- Depth information
- Cross-track error
- Route monitoring
- Navigation alerts

## AIS

- Target vessels
- Vessel name
- MMSI
- Course
- Speed
- Heading
- CPA
- TCPA
- Target information

## Radar / ARPA

Initial interface can support training-level functionality:

- Radar view
- Range
- Bearing
- Targets
- Relative movement
- CPA
- TCPA

## Compass / Gyro

- Heading
- Heading source
- Compass status
- Gyro status
- Sensor disagreement
- Failure scenarios

---

# 13. Virtual Bridge

The Virtual Bridge will provide an immersive navigation environment.

## Bridge Components

- ECDIS
- Radar
- AIS
- GNSS
- Compass
- Gyro
- Celestial Navigation
- Navigation alerts
- Weather
- Ocean environment
- Communication interface

## Supported Modes

- Desktop
- VR
- MR
- Digital Dome / Planetarium environment

---

# 14. Weather & Ocean Environment

Simulation interfaces should support:

- Wind
- Waves
- Swell
- Current
- Tide
- Visibility
- Fog
- Rain
- Cloud cover
- Day / night
- Sea state

Environmental conditions can dynamically affect navigation exercises.

---

# 15. Scenario Center

Scenario Library will organize training scenarios by category.

## Categories

- Celestial Navigation
- GNSS / PNT
- E-Navigation
- Bridge Navigation
- Weather
- Cyber / Navigation Integrity
- Emergency
- Team Training
- Assessment

## Scenario Card

Show:

- Scenario name
- Objective
- Difficulty
- Duration
- Required skills
- Completion status
- Assigned / available state
- Start / Continue

---

# 16. Scenario Builder

Instructor users can build scenarios through a visual workflow.

Example:

```text
START
  ↓
Normal Navigation
  ↓
GNSS Degraded
  ↓
Weather Changes
  ↓
Navigation Alert
  ↓
Celestial Observation
  ↓
Position Fix
  ↓
Assessment
  ↓
AAR
  ↓
END
```

## Scenario Configuration

- Scenario name
- Description
- Difficulty
- Environment
- Start location
- Date / time
- Weather
- Navigation state
- GNSS state
- Sensor state
- Events
- Learning objectives
- Scoring rules
- Pass criteria
- Time limit

---

# 17. Instructor Portal

The Instructor Portal provides professional training management.

## Instructor Dashboard

Show:

- Total trainees
- Active trainees
- Today's sessions
- Upcoming sessions
- Pending assessments
- Average class score
- Course completion
- At-risk trainees
- Simulation utilization

---

# 18. Trainee Management

Instructor can:

- View trainees
- Search trainees
- Filter by course
- Filter by level
- View progress
- View performance
- Assign courses
- Assign simulations
- Schedule sessions
- Review results

Trainee profile should contain:

- Personal training information
- Courses
- Competencies
- Progress
- Scores
- Simulation history
- Certificates
- AAR history

---

# 19. Live Simulation Control

Instructor can monitor active sessions.

## Live Controls

- Start
- Pause
- Resume
- End
- Restart
- Inject scenario event
- Change weather
- Degrade GNSS
- Trigger navigation alert
- Trigger equipment failure
- Monitor trainee status

## Live Monitoring

Display:

- Trainee position
- Scenario state
- Current task
- Progress
- Navigation status
- System warnings
- Performance indicators

---

# 20. Live Sessions

The Live Sessions screen will provide:

- Session schedule
- Calendar
- Upcoming sessions
- Instructor
- Course
- Scenario
- Duration
- Join button
- Session status

---

# 21. Assessments

Assessment Center will support:

- Upcoming assessments
- In-progress assessments
- Completed assessments
- Practical simulations
- Knowledge tests
- Instructor evaluation

## Assessment Data

- Score
- Accuracy
- Response time
- Task completion
- Decision quality
- Navigation performance
- Pass / fail
- Instructor comments

---

# 22. Results & Reports

Trainees can view:

- Overall score
- Skill breakdown
- Course performance
- Simulation performance
- Recent reports
- Assessment history

## Skill Areas

Example:

- Navigation
- Observation
- Calculation
- Accuracy
- Decision Making
- Knowledge
- Teamwork
- Cyber Awareness

---

# 23. After Action Review (AAR)

A professional replay and feedback system.

## Timeline

```text
00:00 Scenario Start
02:14 GNSS Degraded
03:02 Warning Detected
04:15 Cross-check Started
07:40 Celestial Observation
12:10 Position Fix
15:20 Decision
```

## AAR Sections

- What went well
- Errors
- Missed opportunities
- Instructor comments
- Trainee comments
- AI feedback
- Recommended training
- Replay

---

# 24. My Progress

Display:

- Overall completion
- Course progress
- Module progress
- Simulation progress
- Skill scores
- Certificates
- Achievements
- Training hours
- Learning streak
- Recommended next activity

---

# 25. AI Tutor

AI Tutor will be available throughout the training portal.

## Capabilities

- Explain lessons
- Answer astronomy questions
- Explain navigation concepts
- Explain calculation steps
- Give hints
- Generate practice questions
- Generate quizzes
- Explain errors
- Recommend training
- Support remediation

AI should assist the trainee and instructor; final professional assessment remains controlled by authorized instructors.

---

# 26. Achievements

Gamification for appropriate training activities.

Examples:

- Star Explorer
- Celestial Navigator
- Night Sky Observer
- Precision Navigator
- GNSS Resilience
- Navigation Specialist
- Simulation Specialist
- Course Completion
- Mission Specialist

---

# 27. Profile

Profile screen includes:

- Avatar
- Name
- Role
- Organization
- Training rank / level
- Course history
- Certificates
- Achievements
- Preferences

---

# 28. Notifications

Notifications can include:

- New course assigned
- Upcoming simulation
- Assessment reminder
- Instructor feedback
- Certificate issued
- Device warning
- System maintenance
- Training recommendation

---

# 29. Messages

Internal communication between:

- Trainees
- Instructors
- Training administrators

Features:

- Conversations
- New message
- Attachments where permitted
- Read status
- Search
- Notifications

---

# 30. Device Management

For institutional deployments:

- Device list
- Device type
- Device ID
- Connection
- Battery
- Calibration
- Firmware
- Last seen
- Assigned user
- Maintenance status
- Device alerts

---

# 31. Settings & Preferences

Sections:

- Account
- Security
- Notifications
- Appearance
- Language
- Accessibility
- Data & Storage
- Device Preferences
- Privacy
- Help

Future support:

- English
- Urdu
- Arabic
- French
- Spanish
- Additional languages

---

# 32. Offline Mode

ASTRONAV NX should support secure offline training environments.

Frontend should clearly show:

- Offline status
- Last synchronization
- Available offline content
- Pending sync
- Local training data
- Sync status

Example:

```text
OFFLINE MODE
Last Sync: 14:32
Training Data: Saved Locally
Pending Sync: 3 items
```

---

# 33. System Status

Institutional administrators and technicians can monitor:

- Core engine
- Database
- Simulation engine
- AI service
- VR services
- Smart Sextant service
- File storage
- Backup
- Authentication
- Network
- Device services

Status states:

- Operational
- Warning
- Degraded
- Offline

---

# 34. Help Center

Include:

- Search
- User guides
- Instructor guides
- Training guides
- Device guides
- FAQ
- Troubleshooting
- Contact support
- System documentation

---

# 35. Entertainment / Public Portal

The public experience will have a separate visual style while using the same scientific platform.

## Main Areas

- Explore Universe
- 3D Planetarium
- Solar System
- Astronomy Explorer
- Space Missions
- Young Astronaut
- Virtual Telescope
- Astronomy Quiz
- Space Challenges
- Celestial Navigation Experience

---

# 36. Public Space Explorer

Interactive exploration:

```text
Universe
  ↓
Galaxy
  ↓
Solar System
  ↓
Planet
  ↓
Moon
  ↓
Surface / Facts
```

Information may include:

- Size
- Distance
- Temperature
- Atmosphere
- Moons
- Missions
- Scientific facts
- Interactive 3D models

---

# 37. Digital Planetarium

Features:

- Real-time sky
- Constellations
- Stars
- Planets
- Moon phases
- Date / time
- Location
- Sky events
- Guided tours
- Search
- Zoom
- Time travel

---

# 38. Young Astronaut

Gamified educational journey.

Example missions:

1. Solar System
2. Moon
3. Mars
4. Stars
5. Galaxies
6. Space Missions

Rewards:

- XP
- Badges
- Mission completion
- Certificates
- Leaderboards

---

# 39. Astronomy Explorer

Topics:

- Stars
- Planets
- Nebulae
- Galaxies
- Black holes
- Exoplanets
- Space missions
- Telescopes

---

# 40. Virtual Telescope

Users can:

- Select celestial objects
- Search sky
- Zoom
- View object information
- Change date / time
- Explore sky position

---

# 41. Space Missions

Mission pages can contain:

- Mission objective
- Spacecraft
- Destination
- Timeline
- Scientific goals
- Discoveries
- Interactive 3D content

---

# 42. Space Quiz & Challenges

Categories:

- Astronomy
- Solar System
- Stars
- Space Missions
- Celestial Navigation
- General Space Science

Include:

- Score
- Timer
- Difficulty
- Badges
- Leaderboards

---

# 43. Public User Space Journey

Users can track:

- XP
- Missions
- Objects explored
- Quiz score
- Badges
- Learning progress
- Favorite objects

---

# 44. International-Level UX Requirements

The frontend must be:

- Responsive
- Desktop optimized
- Tablet compatible
- VR/MR ready
- Accessible
- Multi-language ready
- Role-based
- Secure
- Modular
- Scalable
- API-ready
- Offline-capable where required

---

# 45. Role-Based Frontend

## Trainee

```text
Dashboard
Academy
Courses
Navigation Lab
Simulations
PNT
Assessments
Progress
AAR
AI Tutor
Certificates
```

## Instructor

```text
Dashboard
Trainees
Courses
Scenario Builder
Live Simulation
Assessments
AAR
Analytics
Content Studio
Devices
Reports
```

## Administrator / Command

```text
Executive Dashboard
Organizations
Users
Training Centers
Courses
Competencies
Devices
Licenses
Security
System Health
Reports
Integrations
```

## Technician

```text
System Health
Devices
Calibration
Firmware
Logs
Services
Backup
Offline Sync
```

---

# 46. Core Design Language

## Training Portal

The design should be:

- Dark navy / space-inspired
- Professional
- Clean
- Data-rich
- Premium
- Minimal
- Institutional

## Public Portal

The design should be:

- Immersive
- Cinematic
- Interactive
- Educational
- Modern
- Gamified

Both experiences must use the same ASTRONAV NX brand identity.

---

# 47. Backend Integration Expectations

Frontend should be developed as a real product UI, not only static mockups.

The architecture should be ready to connect with:

- Authentication API
- User API
- Course API
- Training API
- Simulation API
- Astronomy / scientific engine
- Celestial calculation engine
- Smart Sextant API
- VR/MR services
- Instructor services
- Assessment API
- Analytics API
- AI Tutor API
- Notification API
- Device management API
- Offline synchronization
- Content management
- Reporting

---

# 48. Important Frontend Principle

The frontend must not perform authoritative scientific calculations in the browser.

The frontend displays scientific results received from the authoritative backend/scientific engine.

Example:

```text
User Observation
      ↓
Frontend
      ↓
Backend Scientific Engine
      ↓
Validated Calculation
      ↓
Frontend Visualization
      ↓
Assessment / AAR
```

This keeps the interface visually rich while preserving scientific integrity.

---

# 49. Recommended Final Navigation

## Training Portal

```text
Dashboard
Academy
Courses
Navigation Lab
Simulations
Resilient PNT
Virtual Bridge
Smart Sextant
Assessments
Progress
Results & Reports
AAR
AI Tutor
Live Sessions
Achievements
Messages
Notifications
```

## Instructor

```text
Dashboard
Trainees
Courses
Curriculum
Scenario Builder
Live Simulation
Assessments
AAR
Analytics
Content Studio
Devices
Reports
```

## Administration

```text
Executive Dashboard
Organizations
Users
Training Centers
Devices
Licenses
Security
System Status
Audit
Reports
Integrations
```

## Entertainment

```text
Explore
Planetarium
Solar System
Space Missions
Astronomy Explorer
Young Astronaut
Virtual Telescope
Space Challenges
Quiz
My Space Journey
```

---

# 50. Development Priority

## Phase 1 — Core Product

- Authentication
- Dashboard
- Courses
- Learning Path
- Celestial Navigation Trainer
- Smart Sextant UI
- Simulations
- Progress
- Assessments
- Results
- AAR
- Instructor Dashboard
- Trainee Management
- Live Sessions

## Phase 2 — Advanced Navigation

- Resilient PNT
- GNSS scenarios
- ECDIS
- AIS
- Radar / ARPA
- Compass / Gyro
- Weather / Ocean
- Virtual Bridge
- Scenario Builder
- Advanced Analytics

## Phase 3 — Enterprise

- Device Management
- System Status
- Offline Mode
- Institution Management
- Licensing
- Audit
- Security
- Interoperability
- Content Studio

## Phase 4 — Public / Entertainment

- 3D Planetarium
- Space Explorer
- Solar System
- Astronomy Explorer
- Young Astronaut
- Virtual Telescope
- Space Missions
- Quiz / Challenges

---

# 51. Definition of Done

A frontend module should not be considered complete until it has:

- Responsive UI
- Loading state
- Empty state
- Error state
- Success state
- Form validation
- Role-based access
- Search/filter where required
- Navigation flow
- API integration readiness
- Accessibility considerations
- Consistent ASTRONAV design system

---

# 52. Final Product Goal

ASTRONAV NX should not look like a collection of unrelated dashboards.

Every screen must connect into a single professional ecosystem:

```text
LEARN
  ↓
PRACTICE
  ↓
SIMULATE
  ↓
RESPOND
  ↓
ASSESS
  ↓
REVIEW
  ↓
IMPROVE
  ↓
CERTIFY
```

while the public side follows:

```text
EXPLORE
  ↓
DISCOVER
  ↓
INTERACT
  ↓
LEARN
  ↓
PLAY
  ↓
ACHIEVE
```

The final frontend should be suitable for demonstration to international maritime academies, naval/institutional training organizations, universities, science centers, planetariums, museums, and commercial training providers.
