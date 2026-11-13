---
tag: 2HGCHFYVA0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2936677
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73831
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2000
    source: hf-ai-mo-aops
    label: 2000 Stanford Mathematics Tournament
---
Bobo the clown was juggling his spherical cows again when he realized that when he drops a cow is related to how many cows he started off juggling. If he juggles $1$ , he drops it after $64$ seconds. When juggling $2$ , he drops one after $55$ seconds, and the other $55$ seconds later. In fact, he was able to create the following table:
\begin{tabular}{c|c ccccccccccc}
cows started juggling & 1 & 2 & 3 & 4 & 5 & 6 &7 &8 &9 &10 & 11
seconds he drops after & 64 & 55 & 47 & 40 & 33 & 27 & 22& 18& 14 &13 &12 \hline
cows started juggling & 12 &13 &14& 15 &16& 17& 18& 19 &20& 21 &22
seconds he drops after & 11 &10 &9 &8 &7& 6 &5 &4& 3& 2& 1
\end{tabular}
He can only juggle up to $22$ cows. To juggle the cows the longest, what number of cows should he start off juggling? How long (in minutes) can he juggle for?
