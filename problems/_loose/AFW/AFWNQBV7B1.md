---
tag: AFWNQBV7B1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2565597
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39079
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1988
    source: hf-ai-mo-aops
    label: 1988 French Mathematical Olympiad
---
Consider two spheres $\Sigma_1$ and $\Sigma_2$ and a line $\Delta$ not meeting them. Let $C_i$ and $r_i$ be the center and radius of $\Sigma_i$ , and let $H_i$ and $d_i$ be the orthogonal projection of $C_i$ onto $\Delta$ and the distance of $C_i$ from $\Delta~(i=1,2)$ . For a point $M$ on $\Delta$ , let $\delta_i(M)$ be the length of a tangent $MT_i$ to $\Sigma_i$ , where $T_i\in\Sigma_i~(i=1,2)$ . Find $M$ on $\Delta$ for which $\delta_1(M)+\delta_2(M)$ is minimal.
