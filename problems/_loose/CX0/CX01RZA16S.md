---
tag: CX01RZA16S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [60].) Let $A_{1}, A_{2}, \ldots$ be an arbitrary sequence of events. Prove the following variant of the second Borel-Cantelli lemma (weighted version of the Erdős-Rényi theorem):

(a) If $\sum_{n \geqslant 1} \alpha_{n} \mathrm{P}\left(A_{n}\right)=\infty$ for some $\alpha_{n} \geqslant 0$, then

$$
\mathrm{P}\left(A_{n} \text { i.o. }\right) \geqslant \overline{\lim }_{n} \frac{\left[\sum_{i=1}^{n} \alpha_{i} \mathrm{P}\left(A_{i}\right)\right]^{2}}{\sum_{i, j=1}^{n} \alpha_{i} \alpha_{j} \mathrm{P}\left(A_{i} A_{j}\right)}
$$

(b) If $\sum_{n \geqslant 1} \alpha_{n} \mathrm{P}\left(A_{n}\right)=\infty$ for some $\alpha_{n} \in[0,1]$, then

$$
\mathrm{P}\left(A_{n} \text { i.o. }\right) \geqslant \overline{\lim }_{n} \frac{\sum_{1 \leqslant i<j \leqslant n} \alpha_{i} \alpha_{j} \mathrm{P}\left(A_{i}\right) \mathrm{P}\left(A_{j}\right)}{\sum_{1 \leqslant i<j \leqslant n} \alpha_{i} \alpha_{j} \mathrm{P}\left(A_{i} A_{j}\right)}
$$

Remark. From part (b) with $\alpha_{n} \equiv 1$, it follows that if the events $A_{1}, A_{2}, \ldots$ are pairwise negatively correlated ( $\mathrm{P}\left(A_{i} A_{j}\right)-\mathrm{P}\left(A_{i}\right) \mathrm{P}\left(A_{j}\right) \leqslant 0$, $i \neq j$), then

$$
\mathrm{P}\left(A_{n} \text { i.o. }\right)=I\left(\sum_{n \geqslant 1} \mathrm{P}\left(A_{n}\right)=\infty\right)
$$
