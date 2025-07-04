import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import UploadIcon from '@/app/components/icons/UploadIcon';
import Dropzone from '@/app/components/Dropzone';

export default function Step1() {
  return (
    <>
      <Card className="w-full max-w-sm md:max-w-md lg:max-w-2xl">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-1">
              <UploadIcon />
              <h2>Image & Symptoms Input</h2>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="image" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="image" className="w-1/2">
                Image
              </TabsTrigger>
              <TabsTrigger value="text" className="w-1/2">
                Text
              </TabsTrigger>
            </TabsList>
            <TabsContent value="image">
              <Dropzone />
              <div className="flex justify-center mt-4 mx-8">
                <Button className="w-full">Next</Button>
              </div>
            </TabsContent>
            <TabsContent value="text">Change your password here.</TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
}
