---
tag: W56HCS26RS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2523315
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39124
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1997
    source: hf-ai-mo-aops
    label: 1997 French Mathematical Olympiad
---
Given two distinct points $A,B$ in the plane, for each point $C$ not on the line $AB$ , we denote by $G$ and $I$ the centroid and incenter of the triangle $ABC$ , respectively.

(a) For $0<\alpha<\pi$ , let $\Gamma$ be the set of points $C$ in the plane such that $\angle\left(\overrightarrow{CA},\overrightarrow{CB}\right)=\alpha+2k\pi$ as an oriented angle, where $k\in\mathbb Z$ . If $C$ describes $\Gamma$ , show that points $G$ and $I$ also descibre arcs of circles, and determine these circles.
(b) Suppose that in addition $\frac\pi3<\alpha<\pi$ . For which positions of $C$ in $\Gamma$ is $GI$ minimal?
(c) Let $f(\alpha)$ denote the minimal $GI$ from the part (b). Give $f(\alpha)$ explicitly in terms of $a=AB$ and $\alpha$ . Find the minimum value of $f(\alpha)$ for $\alpha\in\left(\frac\pi3,\pi\right)$ .
