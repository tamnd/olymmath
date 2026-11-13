# Match rate of the derived datasets

This report is made by `om matchrate -derived` (spec 05.4 and 06.5). It reads every seed row of the datasets that the source register marks `derived: true`: rows copied from other sources, sometimes changed or written by a model (spec 05.1). A seed row is matched by key (K) when its competition, year and position give an appearance that has a record. Else it is compared with the 41678 problem records with a statement by E, the cosine of the TF-IDF weights of their words and TeX, and a row whose nearest record has E of at least 0.7 is matched, unless the row and the record both have an answer and the answers differ after a light normalization (signal A). Such a row is a variant: it can be another problem, or the same answer in another form, so a person must look at it. A row with E from 0.5 to 0.7 is near, and a person must look at it too. The other rows are new. New rows of one dataset that have E of at least 0.7 with each other are one new problem, so a problem that the dataset has in several rows counts once.

The exit of milestone 6 asks for less than 1% new problems for each 10,000 rows, that is less than 100 new problems for each 10,000 rows of a dataset.

| Dataset | Rows | Matched | By key | Variants | Near | New rows | New rate | New problems | New per 10,000 rows | New with a competition |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| hf-numinamath-1-5 | 315736 | 39256 | 0 | 2245 | 45895 | 228340 | 72.32% | 181617 | 5752 | 0 |
| hf-omni-math | 4428 | 2595 | 0 | 229 | 405 | 1199 | 27.08% | 1139 | 2572 | 590 |
| hf-olympiadbench | 2133 | 534 | 0 | 24 | 294 | 1281 | 60.06% | 994 | 4660 | 0 |
| hf-liveaopsbench | 5328 | 261 | 0 | 54 | 845 | 4168 | 78.23% | 4094 | 7684 | 0 |
| hf-polymath | 9000 | 1448 | 0 | 89 | 1283 | 6180 | 68.67% | 4291 | 4768 | 0 |
| All | 336625 | 44094 | 0 | 2641 | 48722 | 241168 | 71.64% | 192135 | 5708 | 590 |

5 of 5 datasets give 100 or more new problems for each 10,000 rows: hf-numinamath-1-5, hf-omni-math, hf-olympiadbench, hf-liveaopsbench, hf-polymath. The exit does not hold yet.

These derived datasets have no seed rows yet, so they are not in the table: hf-openmathreasoning, hf-nemotron-math-proofs, hf-nemotron-math-v2, hf-aops-instruct.
