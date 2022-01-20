const titles = ['Captain', 'Quartermaster', 'First Mate', 'Second Mate', 'Third Mate', 'Cabin Boy', 'Carpenter', 'Admiral', 'Commodore', 'Commander', 'Lieutenant'];
const slurs = [
    'Draw yerrr cutlass!', 
    'Hop a\'board me lad', 
    'Go walk the plank!', 
    'Dead men tell no tales,', 
    'Get me another round \'o\' grogs, yer filthy',
    'Henceforth yerrr shall be called',
    'Keelhaul that derrty land rat,'
]

const firstNamFronts = ['Guyb', 'Sam', 'Bar', 'Rob', 'Lem', 'Ben', 'Ra', 'Ne', 'No', 'Be', 'Cal', 'Lor', 'Kel', 'Par', 'In']
const firstNameEndings = ['rush', 'uel', 'arus', 'edict', 'us', 'an', 'ev', 'in', 'uf', 'un', 'us', 'im', 'rish', 'ov', 'zar', 'en', 'wen']

const lastNameFronts = ['Sea', 'Rat', 'Dog', 'Cat', 'Stone', 'Flood', 'Bow', 'Stern', 'Wood', 'Eagle', 'Rock', 'Cut', 'Bone', 'Skull', 'Blood', 'Trick', 'Crown', 'Flag']
const lastNameEndings = ['burn', 'crusher', 'horror', 'dread', 'eye', 'leg', 'head', 'finger', 'tail', 'claw', 'hook', 'less', 'binder', 'walker', 'boiler', 'bone', 'tooth', 'nail', 'foot', 'mourne', 'dagger', 'blade']



function generateName(starts: string[], ends: string[]) {
 const front = starts[Math.floor(Math.random() * starts.length)];
 const end = ends[Math.floor(Math.random() * ends.length)];

 const fullName = front + end

 return fullName
}

export function generatePirateName(): string {
    return generateName(firstNamFronts, firstNameEndings) + ' ' + generateName(lastNameFronts, lastNameEndings);
}

export function generate(collection: string[]) {
    return collection[Math.floor(Math.random() * collection.length)];
}

export function generatePirateTitle() {
    return generate(titles);
}

export function generatePirateSlur() {
    return generate(slurs);
}

export function generateCustomPirateName(name: string): string {
    return generateName([name], firstNameEndings) + ' ' + generateName(lastNameFronts, lastNameEndings);
}