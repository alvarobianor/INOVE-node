import { Router } from 'express';

const useRouter = Router();

const data = [
	{
		name: 'Fuller Chaney',
		phone: '1-752-810-8650',
		address: '6707 Porttitor Avenue',
		email: 'in.nec@outlook.net',
		postalZip: '4114',
		region: 'Corse',
		country: 'Brazil',
		id: 8,
	},
	{
		name: 'Howard Hampton',
		phone: '(614) 245-9180',
		address: '305-5392 Erat St.',
		email: 'eu.odio@google.edu',
		postalZip: '2433',
		region: 'Jönköpings län',
		country: 'China',
		id: 5,
	},
	{
		name: 'Xantha Skinner',
		phone: '1-943-643-8166',
		address: 'Ap #261-2178 Mauris Street',
		email: 'integer.tincidunt@hotmail.ca',
		postalZip: '25610',
		region: 'Punjab',
		country: 'France',
		id: 1,
	},
	{
		name: 'Amir Hudson',
		phone: '(258) 587-0309',
		address: 'Ap #479-9233 Dictum Rd.',
		email: 'sociis.natoque.penatibus@icloud.ca',
		postalZip: 'A6C 7C5',
		region: 'Aragón',
		country: 'Australia',
		id: 6,
	},
	{
		name: 'Willow Garrett',
		phone: '(644) 343-9111',
		address: 'Ap #521-4730 Elit, Rd.',
		email: 'nunc@hotmail.org',
		postalZip: '4648',
		region: 'Basse-Normandie',
		country: 'Chile',
		id: 9,
	},
];

function verifyUser(req, res, next) {
	const { name } = req.body;

	const existsUser = data.find(user => user.name === name);

	if (existsUser) {
		return res.status(400).json({ message: 'User alredy exists!' });
	}
	return next();
}

useRouter.get('/', (req, res) => {
	return res.status(200).json({ Message: 'Deu certo :D' });
});

useRouter.post('/cadastro', verifyUser, (req, res) => {
	const { name, phone, address, email, postalZip, region, country } = req.body;

	const id = Math.random() * 6000;
	data.push({
		id,
		name,
		phone,
		address,
		email,
		postalZip,
		region,
		country,
	});

	return res.status(201).json({ user: data[data.length - 1] });
});

export default useRouter;
