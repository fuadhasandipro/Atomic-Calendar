// Initialization of date

var f = new Date()
const meses = [
  'January',
  'February',
  'March',
  'Abril',
  'May',
  'June',
  'July',
  'August',
  'Septembar',
  'Octebar',
  'Novembar',
  'Dicembar',
]

const dias = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium',
  'Boron',
  'Carbon',
  'Nitrogen',
  'Oxygen',
  'Fluorine',
  'Neon',
  'Sodium',
  'Magnesium',
  'Aluminum',
  'Silicon',
  'Phosphorus',
  'Sulfur',
  'Chlorine',
  'Argon',
  'Potassium',
  'Calcium',
  'Scandium',
  'Titanium',
  'Vanadium',
  'Chromium',
  'Manganese',
  'Iron',
  'Cobalt',
  'Nickel',
  'Copper',
  'Zinc',
  'Gallium',
]

const electron_config = [
  '1s1',
  '1s2',
  '1s2 2s1',
  '1s2 2s2',
  '1s2 2s2 2p1',
  '1s2 2s2 2p2',
  '1s2 2s2 2p3',
  '1s2 2s2 2p4',
  '1s2 2s2 2p5',
  '1s2 2s2 2p6',
  '1s2 2s2 2p6 3s1',
  '1s2 2s2 2p6 3s2',
  '1s2 2s2 2p6 3s2 3p1',
  '1s2 2s2 2p6 3s2 3p2',
  '1s2 2s2 2p6 3s2 3p3',
  '1s2 2s2 2p6 3s2 3p4',
  '1s2 2s2 2p6 3s2 3p5',
  '1s2 2s2 2p6 3s2 3p6',
  '1s2 2s2 2p6 3s2 3p6 4s1',
  '1s2 2s2 2p6 3s2 3p6 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d1 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d2 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d3 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d5 4s1',
  '1s2 2s2 2p6 3s2 3p6 3d5 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d6 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d7 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d8 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d10 4s1',
  '1s2 2s2 2p6 3s2 3p6 3d10 4s2',
  '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p1',
]

const symbols = [
  'H',
  'He',
  'Li',
  'Be',
  'B',
  'C',
  'N',
  'O',
  'Fl',
  'Ne',
  'Na',
  'Mg',
  'Al',
  'Si',
  'P',
  'S',
  'Cl',
  'Ar',
  'K',
  'Ca',
  'Sc',
  'Ti',
  'V',
  'Cr',
  'Mn',
  'Fe',
  'Co',
  'Ni',
  'Cu',
  'Zn',
  'Ga',
]

document.write('<div class="container">')
document.write('<div class="mes">' + dias[f.getDate() - 1] + '</div>')
document.write('<div class="container-2">')
// document.write('<div class="dia">' + meses[f.getMonth()] + '</div>')
document.write(
  '<div class="numero">' +
    symbols[f.getDate() - 1] +
    '<sup>' +
    dias.indexOf(dias[f.getDate()]) +
    '</sup></div>'
)
document.write(
  '<div class="año">' + electron_config[f.getDate() - 1] + '</div>'
)
document.write('</div>')
document.write('</div>')
