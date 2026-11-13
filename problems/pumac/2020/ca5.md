---
tag: CQ2Q26NXAG
kind: problem
appearances:
  - at: pumac/2020/ca5
    primary: true
  - at: pumac/2020/cb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020__PUMaC_Combinatorics_A-2.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747885
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Jacob has a piece of bread shaped like a figure $8$ , marked into sections and all initially connected as one piece of bread. The central part of the " $8$ " is a single section, and each of the two loops of " $8$ " is divided into an additional $1010$ pieces. For each section, there is a $50$ percent chance that Jacob will decide to cut it out and give it to a friend, and this is done independently for each section. The remaining sections of bread form some number of connected pieces. If $E$ is the expected number of these pieces, and $k$ is the smallest positive integer so that $2^k(E - \lfloor E \rfloor ) \ge 1$ , find $\lfloor E \rfloor +k$ . (Here, we say that if Jacob donates all pieces, there are $0$ pieces left).
