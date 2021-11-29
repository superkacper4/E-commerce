interface ArrTypes {
    name: string;
    category: string;
    price: number;
    currency: string;
    image: {
        src: string;
        alt: string;
    };
    bestseller: boolean;
    featured: boolean;
    details: null | {
        dimmentions: {
            width: number,
            height: number
        },
        size: number,
        description: string,
        recommendations: { src: string; alt: string; }[]
    };

}

export const products: ArrTypes[] = [
    {
        name: "Viking",
        category: "warior",
        price: 200,
        currency: "USD",
        image: {
            src: "https://lowcygier.pl/wp-content/uploads/2020/12/assassins_creed_valhalla_miniaturka-scaled.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Sasuke",
        category: "anime",
        price: 500,
        currency: "USD",
        image: {
            src: "https://avatarfiles.alphacoders.com/668/66805.jpg",
            alt: "image"
        },
        bestseller: true,
        featured: false,
        details: null
    },
    {
        name: "Spider-Man",
        category: "superhero",
        price: 100,
        currency: "USD",
        image: {
            src: "https://lowcygier.pl/wp-content/uploads/2018/06/Spider-Man-e1574890035428.png",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Kotlety sojowe",
        category: "food",
        price: 50,
        currency: "USD",
        image: {
            src: "https://www.sklep.sante.pl/userdata/public/gfx/2158/kotlety-sojowe-nowa-wersja.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Pain",
        category: "anime",
        price: 400,
        currency: "USD",
        image: {
            src: "https://i1.sndcdn.com/artworks-6tBqQuFtlvy9ocaZ-Nen3bA-t500x500.jpg",
            alt: "image"
        },
        bestseller: true,
        featured: false,
        details: null
    },
    {
        name: "Amidamaru",
        category: "warior",
        price: 300,
        currency: "USD",
        image: {
            src: "https://i1.sndcdn.com/artworks-w6VDUMiePqe1LRLG-zKPgfA-t500x500.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Minecraft",
        category: "superhero",
        price: 100,
        currency: "USD",
        image: {
            src: "https://lounge.kinguin.net/wp-content/uploads/2021/08/minecraft.jpg?gid=2",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Supereme",
        category: "logo",
        price: 2000,
        currency: "USD",
        image: {
            src: "https://i.kfs.io/artist/global/11837457,0v1/fit/500x500.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Cristiano Ronaldo",
        category: "people",
        price: 500,
        currency: "USD",
        image: {
            src: "https://pbs.twimg.com/profile_images/738052344756199429/zA5S6sk0.jpg",
            alt: "image"
        },
        bestseller: true,
        featured: false,
        details: null
    },
    {
        name: "Paluch",
        category: "people",
        price: 200,
        currency: "USD",
        image: {
            src: "https://i1.sndcdn.com/artworks-2BpROe4PgXbjkuL6-NldBuA-t500x500.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Iron Man",
        category: "superhero",
        price: 200,
        currency: "USD",
        image: {
            src: "https://i1.sndcdn.com/artworks-000128116070-mzte7r-t500x500.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Cosmo",
        category: "art",
        price: 500,
        currency: "USD",
        image: {
            src: "https://i.pinimg.com/originals/64/62/24/6462243c87f1604b1d9046bac1bfe47f.jpg",
            alt: "image"
        },
        bestseller: true,
        featured: false,
        details: null
    },
    {
        name: "Cube",
        category: "art",
        price: 300,
        currency: "USD",
        image: {
            src: "https://cutewallpaper.org/21/background-500x500/3D-polygonal-background-art-vector-03-free-download.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Kakashi",
        category: "anime",
        price: 400,
        currency: "USD",
        image: {
            src: "https://www.wallpaperup.com/uploads/wallpapers/2014/03/26/310518/5ff340dfcc63d9bb524105de386b6692-700.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Naruto",
        category: "anime",
        price: 600,
        currency: "USD",
        image: {
            src: "https://i1.sndcdn.com/artworks-000489778794-5ouqwv-t500x500.jpg",
            alt: "image"
        },
        bestseller: true,
        featured: false,
        details: null
    },
    {
        name: "Shoes",
        category: "clothes",
        price: 100,
        currency: "USD",
        image: {
            src: "https://m.media-amazon.com/images/I/51-yPG8+FAS._AC_SY780_.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Eminem",
        category: "people",
        price: 500,
        currency: "USD",
        image: {
            src: "https://i.pinimg.com/564x/1a/8f/43/1a8f43967dd6272c811dacd035eee629.jpg",
            alt: "image"
        },
        bestseller: true,
        featured: false,
        details: null
    },
    {
        name: "Arcane",
        category: "logo",
        price: 400,
        currency: "USD",
        image: {
            src: "https://fwcdn.pl/cont/5662.1.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },
    {
        name: "Uthred Ragnarsson",
        category: "warior",
        price: 200,
        currency: "USD",
        image: {
            src: "https://i1.sndcdn.com/avatars-2Dp1bydP8z7NL9kJ-mYvAVw-t500x500.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: false,
        details: null
    },

    {
        name: "FC Barcelona",
        category: "logo",
        price: 200,
        currency: "USD",
        image: {
            src: "https://s3.tvp.pl/images2/c/b/2/uid_cb2c5585cfd0649d283ec3062dd390211632896480966_width_1200_play_0_pos_0_gs_0_height_678_wg-sportu-limit-placowy-barcelony-ma-wyniesc-tylko-97-milionow-euro-fot-epa.jpg",
            alt: "image"
        },
        bestseller: false,
        featured: true,
        details: {
            dimmentions: {
                width: 1020,
                height: 1020
            },
            size: 15000,
            description: "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
            recommendations: [
                {
                    src: "https://i.pinimg.com/564x/1a/8f/43/1a8f43967dd6272c811dacd035eee629.jpg",
                    alt: "a"
                },
                {
                    src: "https://pbs.twimg.com/profile_images/738052344756199429/zA5S6sk0.jpg",
                    alt: "b"
                },
                {
                    src: "https://avatarfiles.alphacoders.com/668/66805.jpg",
                    alt: "c"
                },
            ]
        }
    }
]