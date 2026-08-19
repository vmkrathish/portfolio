// Central image registry so components can reference images by key (as
// stored in portfolio.js) while Vite still gets static import paths it can
// optimize and hash at build time.
import profilePhoto from '../assets/images/profile-photo.png'
import gmsLogo from '../assets/images/gms-logo.png'
import gmsHome from '../assets/images/gms-home.jpeg'
import gmsMap from '../assets/images/gms-map.jpeg'
import gmsBookings from '../assets/images/gms-bookings.jpeg'
import gmsTimeline from '../assets/images/gms-timeline.jpeg'
import gmsProfile from '../assets/images/gms-profile.jpeg'
import roadwatchIcon from '../assets/images/roadwatch-icon.png'
import roadwatchDashboard from '../assets/images/roadwatch-dashboard.jpeg'
import roadwatchReport from '../assets/images/roadwatch-report.jpeg'

const images = {
  'profile-photo': profilePhoto,
  'gms-logo': gmsLogo,
  'gms-home': gmsHome,
  'gms-map': gmsMap,
  'gms-bookings': gmsBookings,
  'gms-timeline': gmsTimeline,
  'gms-profile': gmsProfile,
  'roadwatch-icon': roadwatchIcon,
  'roadwatch-dashboard': roadwatchDashboard,
  'roadwatch-report': roadwatchReport,
}

export default images
