---
tag: G9G46SNQK3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h2784234
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=449
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan Mathematics Olympiad
---
Let $x,y,z$ be three positive integers with $\gcd(x,y,z)=1$ . If
$$x\mid yz(x+y+z),$$
$$y\mid xz(x+y+z),$$
$$z\mid xy(x+y+z),$$
and
$$x+y+z\mid xyz,$$
show that $xyz(x+y+z)$ is a perfect square.

*Proposed by usjl*
