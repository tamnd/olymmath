---
tag: GPSPK2R07R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1097768
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32855
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2002
    source: hf-ai-mo-aops
    label: 2002 Olympic Revenge
---
$ABCD$ is a inscribed quadrilateral.
$P$ is the intersection point of its diagonals.
$O$ is its circumcenter.
$\Gamma$ is the circumcircle of $ABO$.
$\Delta$ is the circumcircle of $CDO$.
$M$ is the midpoint of arc $AB$ on $\Gamma$ who doesn't contain $O$.
$N$ is the midpoint of arc $CD$ on $\Delta$ who doesn't contain $O$.

Show that $M,N,P$ are collinear.
