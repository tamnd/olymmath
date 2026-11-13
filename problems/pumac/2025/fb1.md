---
tag: YMXV6THQC1
kind: problem
appearances:
  - at: pumac/2025/fb1
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Indiv_Finals_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
In an atom of PUMaCium, there are $2N$ energy levels that an electron can occupy, indexed $\{1,2,\ldots,2N\}$. A given electron can only travel from a lower-indexed energy level to a higher-indexed one. Whenever it travels from $i$ to $j$, it emits light of energy $E_{ij}$. Supposing that all the $E_{ij}$ are distinct, show that the minimum number of electrons you need to use to get every possible energy of light to be emitted is $N^2$. You are allowed to reuse an electron to get multiple light emissions, as long as it does not go from a higher-indexed energy level to a lower one.
