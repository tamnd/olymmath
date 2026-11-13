---
tag: 60NBVT7AA1
kind: problem
type: answer
answer: "468"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three identical particles are distributed in two identical potential wells, with a total energy of $3 \mathrm{E}_{0}$. Suppose particles at the energy level $k \mathrm{E}_{0}$ obey the Fermi-Dirac distribution, with $2\left(1+k^{2}\right)$ states. How many different configurations are there?

Particles in two different potential wells are independent of each other, although the Fermi-Dirac distribution requires that particles at the same energy level cannot be in the same state, this applies only to particles within the same well, and there is no such restriction between the two wells. The two potential wells are identical, meaning they are indistinguishable.
