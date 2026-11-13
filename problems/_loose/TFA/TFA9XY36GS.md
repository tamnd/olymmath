---
tag: TFA9XY36GS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h548281
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9994
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
\begin{quote}
Ted quite likes haikus,
poems with five-seven-five,
but Ted knows few words.

He knows $2n$ words
that contain $n$ syllables
for every int $n$ .

Ted can only write $N$ distinct haikus. Find $N$ .
Take mod one hundred.
\end{quote}

Ted loves creating haikus (Japanese three-line poems with $5$ , $7$ , $5$ syllables each), but his vocabulary is rather limited. In particular, for integers $1 \le n \le 7$ , he knows $2n$ words with $n$ syllables. Furthermore, words cannot cross between lines, but may be repeated. If Ted can make $N$ distinct haikus, compute the remainder when $N$ is divided by $100$ .

*Proposed by Lewis Chen*
