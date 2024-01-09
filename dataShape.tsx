// initial thoughts on how to structure the data
// this is just a rough sketch, and will likely change as we get further into the project

interface Entry {
	// or event? or Happening ???
	currentTime: Date;
	startTime: Date;
	endTime: Date;
	// notes for the day/migraine in general
	notes: String;

	miseryRating: Number; // 1-5

	symptoms: {
		symptom: {
			severity: Number; // 1-5
			variants: {
				// add more variants here
				string: Number;
			};
			tags: String[];
			notes: String; // optional
		};
		// ex:
		headache: {
			// _default: Number, //???
			severity: Number; // 1-5
			variants: {
				// add more variants here
				stabby: Number;
			};
			notes: String; // optional
		};
		// etc
	}[];

	treatments: [
		{
			treatment: {
				usefulScore: Number; // 1-5 // effectiveness?
				varients: {
					// add more variants here
					string: Number;
				};
				dosage?: Number;
				dosage_unit?: String; //mg
				quantity?: Number;
				tags: String[];
				notes: String; // optional
			};
			// ex:
			// meds in general
			ibuprofen: {
				dosage?: Number;
				dosage_unit: String; //mg
				quantity: Number;
				varients: {
					// add more variants here
					liquid: Number;
					"100 mg long lasting": Number;
				};
				usefulScore: Number; // 1-5 // personal ranking of how well it worked or experienced side effects.
				tags: String[]; //ex: pharmaceuticals
				notes: String; // optional
			};
		}
	];
}
