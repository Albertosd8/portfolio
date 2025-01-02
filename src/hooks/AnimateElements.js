import { useSpring } from 'react-spring';

export const EnterFrom = () => {
    const AppearFromBelowAnimation = useSpring({
      from: { opacity:0, innerHeight: 0, maxHeight: 0},
      to: { opacity:1, innerHeight: 100, maxHeight: 180},
      config:{ mass: 1, tension: 120,friction: 60, duration: 800 },
    });

    const BringUpFromBelowAnimation = useSpring({
        from: { opacity:0, transform: "translate3d(0, +40px, 0)"},
        to: { opacity:1, transform: "translate3d(0, 0px, 0)"},
        config:{mass: 1, tension: 120,friction: 60, duration: 800},
    })

    return { AppearFromBelowAnimation, BringUpFromBelowAnimation };
}

export const FadeChange = () => {
    const AppearElement = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config:{mass: 1, tension: 120,friction: 60, duration: 500},
        // loop: true
    });

    const DisappearElement = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config:{mass: 1, tension: 120,friction: 60, duration: 500},
    });

    return { AppearElement, DisappearElement };
}

export const AddMovementToElement = () => {

    const ShakeElementAnimation = useSpring({
        from: { x: 0 },
        to: [{ x: 20 },{x:0}],
        delay: 20,
        loop: true
    });

    const BounceElementAnimation = useSpring({
        from: { y: 0 },
        to: [{ y: 10 },{y:0}],
        config:{ mass: 1, tension: 120,friction: 60, duration: 300 },
        delay: 20,
        loop: true
    });

    return { BounceElementAnimation, ShakeElementAnimation };
}


