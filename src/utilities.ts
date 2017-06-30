export class Utilities {

	public static combineToPathWithoutFileName(parts: string[]): string {
		return parts.reduce((prev, curr) => curr.includes('.') ? prev : prev.concat(curr));
	}

	public static splitKeepDelimeter(text: string, delimeter: string) {
		let parts = text.split(delimeter);

		parts = parts.map((item, index) => {
			return item ? delimeter.concat(item) : '';
		});
		return parts;
	}
}