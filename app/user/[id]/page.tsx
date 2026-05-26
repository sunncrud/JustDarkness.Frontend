import ProfileHeader from "./ProfileHeader";
import PlayerModel from "./PlayerModel";
import SkinsBox from "./SkinsBox";
import OverviewStats from "./OverviewStats";
import SeasonsList from "./SeasonsList";
import styles from "./profile.module.css";
import Achievements from "./Achievements";
import AboutMe from "./AboutMe";
import Roles from "./Roles";
import JoinedDate from "./JoinedDate";

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const username = resolvedParams.id;

  return (
    <div className={styles.pageContainer}>
      
      <ProfileHeader username={username} />

      <div className={styles.mainGrid}>
        
        <div className={styles.leftColumn}>
          <PlayerModel username={username} />
          <SkinsBox />
          <AboutMe />
          <JoinedDate />
        </div>

        <div className={styles.rightColumn}>
          <Roles />
          <OverviewStats />
          <SeasonsList />
          <Achievements />
        </div>

      </div>
    </div>
  );
}