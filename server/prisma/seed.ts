import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const skins = [
    {
      name: 'AK-47 | Asiimov',
      image:
        'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfYXNpaW1vdl9saWdodC4xZWMwMjRhOWVkMjE0NzE4MjUzOTA3NjM4MzFmZGNkNDE3NTA1Y2MwLnBuZw--/auto/auto/85/notrim/500cc78c57df4c739bccf978b38d8d83.webp',
      category: 'Rifle',
      float: '0.05',
      price: 5000,
    },
    {
      name: 'M4A4 | Howl',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdS02a2VqaGp4c3pGSlR3VDA5UzVnNHlDbWZETFA3TFdubjhmNnBJbDIteVlwOVNuakEyMy1CQnVOVy1pTEktWEpnRnNaUXlHX1ZXMmxPcTkxOGU4dXN6TG4yd2o1SGVBdmtWZHRR/auto/auto/85/notrim/6b8e7efb900be8f9de888c9d998cdfb6.webp',
      category: 'Rifle',
      float: '0.03',
      price: 20000,
    },
    {
      name: 'AWP | Dragon Lore',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdDYyMUZBUjE3UDdOZFRSSC10MjZxNFNabHZEN1BZVFFnWHR1NU14Mmd2MlByZFNpakFXd3FrVnROMjcySklHZEp3NDZZVnJZcVZPM3hMeS1nSkM5dTV2QnlDQmg2eWdpN1dHZHdVS1RZZFJEOEE-/auto/auto/85/notrim/53e3a7a23f47500e6e1651c084bc1fcf.webp',
      category: 'Sniper Rifle',
      float: '0.01',
      price: 100000,
    },
    {
      name: 'Butterfly Knife | Fade',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdmJTc0xRSmYwZWJjWlRoUTZ0Q3ZxNEdLcVBIMU43N3VtbUpXNE5FXzNlckhvdFNnMndibi0wdGtaMnIzZDRhVWN3RTROMUhSX1FTX3hlN3NqWlB2N1p6TXdIVmk3RDVpdXloOWFLejhCQQ--/auto/auto/85/notrim/bf46fd218eecf913e33571ccf1e07fe1.webp',
      category: 'Knife',
      float: '0.007',
      price: 50000,
    },
    {
      name: 'Glock-18 | Fade',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3Bvc2JhcUtBeGYwdkwzZHp4RzZlTzZuWWVEZzduMWEtNkdrRG9DN3BNcDNyR1lwTnFpaVEyMy1VTTVaVC1oY0llUUpnWnNNRnZSX2xUb3g3aS1tOWJpNi1wamZ1bEc-/auto/auto/85/notrim/84def4cc583d1c2899ecc71f49f3710c.webp',
      category: 'Pistol',
      float: '0.02',
      price: 3000,
    },
    {
      name: 'Desert Eagle | Blaze',
      image:
        'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9kZWFnbGVfY3VfZGVzZXJ0X2VhZ2xlX2NvcnJvZGVuX2xpZ2h0LmVlYzc0MzE2NTNjNmQ4NDQyZDcyOWQwMTg5MjVkYzViYTk2M2ZjNmIucG5n/auto/auto/85/notrim/b64bee141e1060a26cefc4c0d4123843.webp',
      category: 'Pistol',
      float: '0.03',
      price: 25000,
    },
    {
      name: 'Karambit | Doppler',
      image:
        'https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rYXJhbWJpdF9hbV9kb3BwbGVyX3BoYXNlMV9saWdodC4yYjdjYWFhMmE5OGRiNmY2NWU1MWJiMmQ5YThlNzA0MDhkNjAwOWE3LnBuZw--/auto/auto/85/notrim/f27526b9b7364d0adaa2d8af0497f000.webp',
      category: 'Knife',
      float: '0.02',
      price: 60000,
    },
    {
      name: 'AK-47 | Neon Rider',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdDdIeGZEaGp4c3pKZWdKTTZkTzRxNUtDa19MbURMZllrV05GcHBZb2pPdkZwZGoyMFFLeHFFWV9hMnIxY0lhZEl3ZG9NbDNROGxHOWw3eTdnNUM1dTVuSXpuSjktbjUxWVAxYjZEUQ--/auto/auto/85/notrim/e7145c7203360bf25587229e84e89c9a.webp',
      category: 'Rifle',
      float: '0.04',
      price: 15000,
    },
    {
      name: 'M4A1-S | Hyper Beast',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdS02a2VqaHoydl9OZno1SF91TzFnYi1Hd19hbERMUElobTVEMThkMGlfclZ5b0Q4ajF5ZzVVSnJOanJ3ZDRTVWNRWnNaRm5SX3dlM3hyM3QxcEMtdVpYTXpuTTM3bklyNGltTWxrT3hpUmxTTHJzNEx4ZVNyNUU-/auto/auto/85/notrim/6c3e7a905dd197b87acb9e61f8f3cd30.webp',
      category: 'Rifle',
      float: '0.03',
      price: 10000,
    },
    {
      name: 'AWP | Medusa',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdDYyMUZBUjE3UDdOZFNoUjdlTzNnNUMwbV83ek82LWZ4bWhWN0pJaDItLVk5b3FnaTFEbF9SQV9aR0R6TFlmQWNnWTZaMTJGOHdmc3dlZTlnWkR2N1lPSmx5WGhVRmhKakE-/auto/auto/85/notrim/907e07879ba3898728035e8813756bfa.webp',
      category: 'Sniper Rifle',
      float: '0.01',
      price: 120000,
    },
    {
      name: 'USP-S | Kill Confirmed',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvbzZtMUZCUnAzX2JHY2poUTA5LWpxNVdZaDhqX09yZmRxV2hlNXNONG1PVEU4YlA1Z1ZPOHYxMDZOVDM3TFktY0pBWnZaRi1FckFDN3dMaTYwTU81N3M3TndTQmd2U2drc3luYW1FZm1pUkJKY0tVeDBuVWZsbWow/auto/auto/85/notrim/ab57cbbcfb4f09715cad3e41e347ef46.webp',
      category: 'Pistol',
      float: '0.03',
      price: 8000,
    },
    {
      name: 'P250 | Whiteout',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvcHVqd2V6aHozTXpmZVRSVzZkT2pnTC1IbnZEOEpfV0NsV2hTN3BFcGpMQ1k4WWlzMndIal94RTlNRF8xZDQ2UmN3WnFNbG5ZLUZHNnhydm0xOEstb3QyWG5waHZVWDNK/auto/auto/85/notrim/51ab5f8329819d9905764bd8dd2f7bb9.webp',
      category: 'Pistol',
      float: '0.02',
      price: 2000,
    },
    {
      name: 'Bayonet | Marble Fade',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdEx1OEpBbGx4OHpKZkFKUDdjNjBtSVcwa2Zid05vVGRuMnhaX0l0MDMtdVdvNG4zMmdIaV9rWnVaRzZtZDlDVGN3YzRaMURRX2xlOHlPYnZncC03dk0tY3dYb3hwR0I4c2kwdnZGTEE-/auto/auto/85/notrim/2568d725e05c5baa29cdf1d7e3f6699f.webp',
      category: 'Knife',
      float: '0.01',
      price: 70000,
    },
    {
      name: 'AWP | Asiimov',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdDYyMUZBUjE3UExmWVFKRF85VzdtNWEwbXZMd09xN2MyRE1CdXBRbjJlcVZvdHFraXdIaXFoZGxNbWlnSnRPV0p3RTVadzNYOHdTLXllYThqY0RvN2M3WGlTdzBnODlMOXVz/auto/auto/85/notrim/f0c32df9f4948e519ee181869596fbf5.webp',
      category: 'Sniper Rifle',
      float: '0.05',
      price: 30000,
    },
    {
      name: 'M9 Bayonet | Lore',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdmJTc0xRSmYzcXIzY3p4YjQ5S3pnTC1JZ3NqNWFvVFRsM0p1NU1wamo5Yk5fSXY5bkJxMXJSWmtOV3oxSU5lVWR3SnZZMXpYckZEc3h1bTVocFhxNzV6THdTRmx2Q1VuNTNiZGxoQ3luMWdTT1pReFExVjE-/auto/auto/85/notrim/f09aaeb10476004ab8c7c779cccfc004.webp',
      category: 'Knife',
      float: '0.02',
      price: 80000,
    },
    {
      name: 'AK-47 | Fire Serpent',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3BvdDdIeGZEaGp4c3pPZUM5SF85bWtoSVdGZzhqMU9PLUdxV2xENmROLXRlWEk4b1RoeGdma3FSQnFOVzMwY0llVElGVTNOQW5aLUZuc2xlcTZnSlc2dUpYT21IUXd1WFIwc1hmWm1oZXB3VVlibFlkTld4TQ--/auto/auto/85/notrim/d895e23a747a316ee4cc70415da4808c.webp',
      category: 'Rifle',
      float: '0.05',
      price: 40000,
    },
    {
      name: 'Desert Eagle | Golden Koi',
      image:
        'https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jb21tdW5pdHkuY2xvdWRmbGFyZS5zdGVhbXN0YXRpYy5jb20vZWNvbm9teS9pbWFnZS8tOWE4MWRsV0x3SjJVVUdjVnNfbnNWdHpkT0VkdFd3S0daWkxRSFR4RFo3STU2S1UwWnd3bzROVVg0b0ZKWkVITGJYSDVBcGVPNFltbGh4WVFrbkNSdkNvMDRERVZseGtLZ3Bvc3Ita0xBdGw3UExGVGk1QjdkQ3poNy1KaGZiaVBJVGRuMnhaX0lzbWk3REE5dFdnMFZIbV9FVnRZMmlpY29UQWRBSTNZRkdCcTFYb3dPYnAwNUs5djgtWW55Y3hwR0I4c3NOckQ2OWo-/auto/auto/85/notrim/5d39f1246a7b611f226d312afca1c949.webp',
      category: 'Pistol',
      float: '0.02',
      price: 12000,
    },
  ];

  for (const skin of skins) {
    await prisma.item.create({
      data: skin,
    });
  }

  console.log('Database has been seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
