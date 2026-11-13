---
tag: NCHPAW3A2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2560988
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39093
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1991
    source: hf-ai-mo-aops
    label: 1991 French Mathematical Olympiad
---
Let $S$ be a fixed point on a sphere $\Sigma$ with center $\Omega$ . Consider all tetrahedra $SABC$ inscribed in $\Sigma$ such that $SA,SB,SC$ are pairwise orthogonal.
(a) Prove that all the planes $ABC$ pass through a single point.
(b) In one such tetrahedron, $H$ and $O$ are the orthogonal projections of $S$ and $\Omega$ onto the plane $ABC$ , respectively. Let $R$ denote the circumradius of $\triangle ABC$ . Prove that $R^2=OH^2+2SH^2$ .
