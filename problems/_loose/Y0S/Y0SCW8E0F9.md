---
tag: Y0SCW8E0F9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h360932
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5107
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Iran MO (3rd Round)
---
$g$ and $n$ are natural numbers such that $gcd(g^2-g,n)=1$ and $A=\{g^i|i \in \mathbb N\}$ and $B=\{x\equiv (n)|x\in A\}$ (by $x\equiv (n)$ we mean a number from the set $\{0,1,...,n-1\}$ which is congruent with $x$ modulo $n$ ). if for $0\le i\le g-1$ $a_i=|[\frac{ni}{g},\frac{n(i+1)}{g})\cap B|$ prove that $g-1|\sum_{i=0}^{g-1}ia_i$ .( the symbol $|$ $|$ means the number of elements of the set)( $\frac{100}{6}$ points)

the exam time was 4 hours
