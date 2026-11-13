---
tag: 1AHTXNGNN6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585527
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11652
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213609
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Let $ABC$ be an acute triangle with circumcenter $O$ , and select $E$ on $\overline{AC}$ and $F$ on $\overline{AB}$ so that $\overline{BE} \perp \overline{AC}$ , $\overline{CF} \perp \overline{AB}$ . Suppose $\angle EOF - \angle A = 90^{\circ}$ and $\angle AOB - \angle B = 30^{\circ}$ . If the maximum possible measure of $\angle C$ is $\tfrac mn \cdot 180^{\circ}$ for some positive integers $m$ and $n$ with $m < n$ and $\gcd(m,n)=1$ , compute $m+n$ .

*Proposed by Evan Chen*
